import { NextResponse } from 'next/server';
import { baseServerUrl } from './app/lib/service/setup';

let validateToken = async (token) => {
  try {
    const response = await fetch(`${baseServerUrl}/user-service/api/v1/auth/validate-token`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response;

  } catch (error) {
    console.error("Error during token validation:", error);
    throw error;
  }
}


export async function middleware(req) {
  const token = req.cookies.get('authToken'); // Check if auth token exists

  if (!token) {
    console.log("No token found in cookies");
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Parse the token value
  let parsedToken;
  try {
    parsedToken = JSON.parse(token.value);
  } catch (error) {
    console.log('Failed to parse token:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }

  let validationResult = await validateToken(parsedToken.jwtToken.token);


  if (!validationResult.ok) {
    if (validationResult.json().message == "Token has expired") {
      console.log("Token has expired, redirecting to refresh token page");     
      const refreshUrl = new URL('/refreshtoken', req.url);
      refreshUrl.searchParams.set('redirect', req.nextUrl.pathname);
      return NextResponse.redirect(refreshUrl);
    } 
    else {
      console.log("Failed to validate token, redirecting to login page========================>>");    
      console.log(validationResult); 
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  

  // console.log("Logging the parsed token");
  // console.log(parsedToken);
  // console.log("==================================>");

  // Object.keys(parsedToken).map(key => {
  //   console.log("Key ===>" + key);
  //   console.log(parsedToken[key]);
  // });


  // {
  //   jwtToken: {
  //   token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyLWlkIjoxMSwib3JnYW5pemF0aW9uLWlkIjoxMSwidHlwZSI6ImFjY2VzcyIsImF1dGhvcml0aWVzIjpbXSwic3ViIjoic2RzZEBnZGZmLmNvbSIsImlhdCI6MTc0MDcyOTU2OSwiZXhwIjoxNzQwODE5NTY5fQ.7nwfrN0LOQeEsNnDTqWh7sPKlJVlavkP16XPhngd_lE',
  //   expiresIn: 90000000
  // },
  //   jwtRefreshToken: {
  //   token: 'eyJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoicmVmcmVzaCIsInN1YiI6InNkc2RAZ2RmZi5jb20iLCJpYXQiOjE3NDA3Mjk1NjksImV4cCI6MTc0MTMzNDM2OX0.0FeTye9qTfsaXhkXWsanyrfhokls2MZeH8c1v68p7fo',
  //   expiresIn: 604800000
  // }
  // }


  return NextResponse.next(); // Continue to the requested page
}

export const config = {
  matcher: ['/page/:path*'], // Protect specific routes
};
