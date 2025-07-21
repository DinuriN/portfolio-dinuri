#Official Nginx image
FROM nginx:alpine

#removing default nginx static  files
RUN rm -rf /usr/share/nginx/html/*

#copy only dist
COPY dist/ /usr/share/nginx/html

#expose port 80
EXPOSE 80

#start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]