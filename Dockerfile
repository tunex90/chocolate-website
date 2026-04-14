# Specify the base image

FROM nginx:alpine

# remove the default welcome to nginx file

RUN rm -rf /usr/share/nginx/html/*


# copy all our website files to the nginx directory

COPY . /user/share/nginx/html

# expose a port

EXPOSE 80

# command to start nginx

CMD ["nginx", "-g", "daemon off;"]

