/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50611
 Source Host           : localhost
 Source Database       : demo_all

 Target Server Type    : MySQL
 Target Server Version : 50611
 File Encoding         : utf-8

 Date: 05/01/2020 14:12:27 PM
*/

/* SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0; */

-- ----------------------------
--  Table structure for `posts`
-- ----------------------------
DROP TABLE IF EXISTS `vendoritems`;
CREATE TABLE `vendoritems` (
  `id` varchar(250) NOT NULL ,
  `userid` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `price` varchar(250) DEFAULT NULL,
  `begindate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `posts`
-- ----------------------------
/* BEGIN;
INSERT INTO `vendorform` VALUES ('2', 'Hello this is new post', 'This is a description', 'https://www.blogmarketingacademy.com/wp-content/uploads/2018/01/perfect-blog-post-1024x576.jpg', null, '1', '2020-05-01 13:13:32', null, null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1; */