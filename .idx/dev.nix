{pkgs} :{
    channel  =  "stable-23.11";
    packages  = [
        pkgs.nodejs
        pkgs.yarn
        pkgs.nodePackages.pnpm
        pkgs.openjdk17
        pkgs.spring-boot-cli
        pkgs.maven
        pkgs.mysql80
        pkgs.service-wrapper
    ];
    services.mysql.enable = true;
    services.mysql.dataDir = "/var/lib/mysql";

}