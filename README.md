WSB Site
========

How to run application for development with Windows
--------
**Install Apache**
1. Download Apache. Apache 2.4.29 Win64.
2. Add Apache bin to path.
  
**Install and configure PHP**
1. Download PHP. PHP 7.2 (7.2.3) VC15 x64 Thread Safe
2. Add to path
3. Configure Apahace for PHP, httpd.conf
    * LoadModule php7_module "C:\php\php7apache2_4.dll"
	* AddHandler application/x-httpd-php .php
	* PHPIniDir “C:/php”

**Install and configure a mail server**
1. For development purposes, a [dummy SMTP server](https://archive.codeplex.com/?p=smtp4dev) was used

**Run application as console application**  
1. Run the httpd command 

