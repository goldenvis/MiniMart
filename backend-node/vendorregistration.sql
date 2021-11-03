DROP TABLE IF EXISTS `vendorregister`;
CREATE TABLE `vendorregister` (
  `id` varchar(250) NOT NULL UNIQUE, 
  `email` varchar(250) NOT NULL UNIQUE,
  `password` varchar(255),
  `vendorname` varchar(250),
  `vendorid` varchar(250),
  `country` varchar(250),
  `city` varchar(250),
  `phonenumber` integer,
  `longitude` varchar(250),
  `latitude` varchar(250),
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;