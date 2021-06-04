-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 04:24 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belajar-sequelize`
--

-- --------------------------------------------------------

--
-- Table structure for table `matkul`
--

CREATE TABLE `matkul` (
  `matkul_id` varchar(3) NOT NULL,
  `matkul_nama` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matkul`
--

INSERT INTO `matkul` (`matkul_id`, `matkul_nama`, `createdAt`, `updatedAt`) VALUES
('JK1', 'Jaringan Komputer', '2021-05-28 10:28:11', '2021-05-28 10:28:11'),
('JK2', 'Jaringan Komputer (MikroTik)', '2021-05-28 10:28:30', '2021-05-28 10:28:30'),
('PA1', 'Akuntansi Dasar', '2021-05-28 10:29:12', '2021-05-28 10:29:12'),
('RO1', 'Review Office', '2021-05-28 10:28:53', '2021-05-28 10:28:53');

-- --------------------------------------------------------

--
-- Table structure for table `matkulsiswa`
--

CREATE TABLE `matkulsiswa` (
  `siswa_id` varchar(5) NOT NULL,
  `matkul_id` varchar(3) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matkulsiswa`
--

INSERT INTO `matkulsiswa` (`siswa_id`, `matkul_id`, `createdAt`, `updatedAt`) VALUES
('1101', 'JK1', '2021-05-30 08:52:53', '2021-05-30 08:52:53'),
('1101', 'JK2', '2021-05-30 08:52:56', '2021-05-30 08:52:56'),
('1102', 'JK2', '2021-05-30 08:54:05', '2021-05-30 08:54:05'),
('1102', 'RO1', '2021-05-30 08:54:16', '2021-05-30 08:54:16'),
('1102', 'PA1', '2021-05-30 08:54:23', '2021-05-30 08:54:23');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210527114005-SiswaMigration.js');

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `siswa_id` varchar(5) NOT NULL,
  `siswa_nama` varchar(50) NOT NULL,
  `siswa_email` varchar(50) DEFAULT NULL,
  `siswa_umur` int(2) DEFAULT NULL,
  `siswa_alamat` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`siswa_id`, `siswa_nama`, `siswa_email`, `siswa_umur`, `siswa_alamat`, `createdAt`, `updatedAt`) VALUES
('1101', 'Rafi', 'rafi@gmail.com', 10, 'Jakarta', '2021-05-26 03:35:39', '2021-05-26 03:35:39'),
('1102', 'Alfatih', 'alfatih@gmail.com', 15, 'Jakarta', '2021-05-26 03:37:38', '2021-05-26 03:37:38'),
('1103', 'Laba', 'laba@gmail.com', 16, 'Jember', '2021-05-27 14:36:47', '2021-05-27 14:36:47'),
('1104', 'Labi', 'labi@gmail.com', 21, 'Jember', '2021-05-27 14:37:12', '2021-05-27 14:37:12'),
('1106', 'Calculus', 'calc@gmail.com', 22, 'Jakarta', '2021-05-27 14:37:40', '2021-05-27 14:37:40'),
('1107', 'Mintea', 'calc@gmail.com', 11, 'Surabaya', '2021-05-27 14:37:57', '2021-05-27 14:37:57'),
('1108', 'Alfatuh', 'alfa@gmail.com', 17, 'Surabaya', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('1109', 'Alfathink', 'alpha@gmail.com', 13, 'Surabaya', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('1110', 'Alfathink', 'afa@gmail.com', 13, 'Surabaya', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `matkul`
--
ALTER TABLE `matkul`
  ADD PRIMARY KEY (`matkul_id`);

--
-- Indexes for table `matkulsiswa`
--
ALTER TABLE `matkulsiswa`
  ADD KEY `siswa_id` (`siswa_id`),
  ADD KEY `matkul_id` (`matkul_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`siswa_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `matkulsiswa`
--
ALTER TABLE `matkulsiswa`
  ADD CONSTRAINT `matkulsiswa_ibfk_1` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`siswa_id`),
  ADD CONSTRAINT `matkulsiswa_ibfk_2` FOREIGN KEY (`matkul_id`) REFERENCES `matkul` (`matkul_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
