DROP TABLE IF EXISTS `vendorlogin`;
CREATE TABLE `vendorlogin` (
  `id` varchar(250) NOT NULL UNIQUE, 
  `email` varchar(250) NOT NULL UNIQUE,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;