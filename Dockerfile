FROM registry.k8s.example.com:5000/docker.io/nginx:1.17.8

MAINTAINER 汪浩浩-whh881114@gmail.com

LABEL version="v1.0.0" description="LAMP环境：测试前后端分离，使用nginx-ingress作为负载入口。" by="汪浩浩"

RUN rm -rf /usr/share/nginx/html/
ADD css /usr/share/nginx/html/css
ADD js /usr/share/nginx/html/js
COPY *.html /usr/share/nginx/html/

CMD [ "/usr/sbin/nginx", "-g", "daemon off;" ]

EXPOSE 80