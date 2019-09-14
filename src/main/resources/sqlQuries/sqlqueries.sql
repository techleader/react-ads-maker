CREATE TABLE ads (
    adsid INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR(100) NOT NULL,
    price  int NOT NULL,
    logo VARCHAR(100) NOT NULL,
    PRIMARY KEY ( adsid ));

.................insert......................
INSERT INTO ads (productName,price,logo)
values('Denim Jeans',2000,'bg2.jpg');

INSERT INTO productimage
values(2,'bg4.jpg');