CREATE TABLE ads (
    adsId INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR(100) NOT NULL,
    price  int NOT NULL,
    logo VARCHAR(100) NOT NULL,
    imageUrl VARCHAR(100) NOT NULL,
    PRIMARY KEY ( adsid ));

.................insert......................
INSERT INTO ads (productName,price,logo,image) values('Denim Jeans',2000,'levi.jpg','bg2.jpg');

