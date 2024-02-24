server {
	 listen 192.168.0.159:80 ;
     server_name training.jirengu.com;
#ACME_NGINX_START
location ~ "^/\.well-known/acme-challenge/([-_a-zA-Z0-9]+)$" {
  default_type text/plain;
  return 200 "$1._l4XKu-BTBC3R-CScIs7H0l4HktJV_5L7EzBkAiRmfM";
}
#NGINX_START

     rewrite ^(.*)$  https://training.jirengu.com$1 permanent;
     root /var/www/jirengu.com;
	 index index.html index.htm index.php;
}

# HTTPS server
#
server {
    listen 192.168.0.159:443 ;
    server_name training.jirengu.com;
	root /var/www/jirengu.com;
    index index.html index.htm index.php;
    #include /var/www/jirengu.com/nginx.conf;
    # error_page 404 /404.html;

	location = / {
		alias /home/hunger/homepage/current/jirengu/;
		try_files $uri $uri.html index.html /new/$uri.html;
	}

	location ^~ /new/ {
		alias /home/hunger/homepage/current/jirengu/;
		try_files $uri /new/$uri/ /new/$uri.html;
	}

	location ^~ /C++ {
		alias /home/hunger/homepage/current/cplusplus/;
		try_files $uri/ $uri.html index.html;
	}

	location ^~ /java {
		alias /home/hunger/homepage/current/java/;
		try_files $uri/ $uri.html index.html;
	}

	location ^~ /english {
		alias /home/hunger/homepage/current/english/;
		try_files $uri/ $uri.html index.html;
	}

	location ^~ /mode {
		return 301 https://$server_name/new$request_uri;
	}

	location ^~ /n/ {
		deny all;
	}
	location = /favicon.ico {
		return 301 https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-11-1-41.f61896f6.png;
	}
	include /var/www/jirengu.com/nginx.conf;

    location ~ \.php$ {
        add_header 'Access-Control-Allow-Origin' 'video.jirengu.com';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php5-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

	ssl on;
	ssl_certificate /etc/letsencrypt/live/training.jirengu.com/cert.pem;
	ssl_certificate_key /etc/letsencrypt/live/training.jirengu.com/key.pem;
	ssl_session_timeout 7200m;
	ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
	ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";
	ssl_prefer_server_ciphers on;
}
