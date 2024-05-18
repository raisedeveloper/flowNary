//package com.example.flownary.filter;
//
//import java.io.IOException;
//
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//
//import jakarta.servlet.Filter;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.FilterConfig;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.ServletRequest;
//import jakarta.servlet.ServletResponse;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//@Order(Ordered.HIGHEST_PRECEDENCE)
//public class CorsFilter implements Filter {
//
//   @Override
//   public void init(FilterConfig filterConfig) throws ServletException {
//      // 초기화가 필요하지 않음
//   }
//
//   @Override
//   public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain)
//         throws IOException, ServletException {
//      HttpServletRequest request = (HttpServletRequest) req;
//      HttpServletResponse response = (HttpServletResponse) res;
//      String origin = request.getHeader("Origin");
//
//      // CORS 허용 도메인 설정
//      if (origin != null && (origin.endsWith("localhost:8090") || origin.endsWith("localhost:3000")
//            || origin.endsWith(".cloudinary.com") || origin.contains("192.168.0.43:3000"))) {
//         response.setHeader("Access-Control-Allow-Origin", origin);
//      }
//
//      response.setHeader("Access-Control-Allow-Credentials", "true");
//      response.setHeader("Access-Control-Allow-Methods", "*");
//      response.setHeader("Access-Control-Max-Age", "3600");
//      response.setHeader("Access-Control-Allow-Headers",
//            "Origin, X-Requested-With, Content-Type, Accept, Authorization, Referer");
//
//      if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//         response.setStatus(HttpServletResponse.SC_OK);
//      } else {
//         filterChain.doFilter(req, res);
//      }
//   }
//
//   @Override
//   public void destroy() {
//      // 종료 시 필요한 작업 없음
//   }
//}

package com.example.flownary.filter;

import java.io.IOException;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(
      ServletRequest req, 
      ServletResponse res, 
      FilterChain filterChain
      ) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        String origin = request.getHeader("origin");
        
        if (origin != null && (origin.endsWith("localhost:8090") || origin.endsWith("localhost:3000") || origin.endsWith(".cloudinary.com")
              ))
        {           
           response.setHeader("Access-Control-Allow-Origin", origin);
        }
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods","*");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization");

        if("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        }else {
            filterChain.doFilter(req, res);
        }
    }

    @Override
    public void destroy() {

    }

}
