-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Okt 2020 pada 19.56
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticked_app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `payment`
--

CREATE TABLE `payment` (
  `id_payment` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `status_payment` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `payment`
--

INSERT INTO `payment` (`id_payment`, `total_price`, `id_account`, `status_payment`, `created_at`, `update_at`) VALUES
(1, 1800, 1, 'belum dibayar', '2020-10-17 16:25:12', '2020-10-17 16:25:12'),
(2, 1400, 1, 'belum dibayar', '2020-10-18 05:49:47', '2020-10-18 05:49:47'),
(3, 1400, 1, 'sudah dibayar', '2020-10-18 05:52:43', '2020-10-20 14:33:51'),
(4, 1400, 1, 'belum dibayar', '2020-10-18 05:56:43', '2020-10-18 05:56:43'),
(5, 1400, 1, 'belum dibayar', '2020-10-18 05:57:38', '2020-10-18 05:57:38'),
(6, 1400, 1, 'belum dibayar', '2020-10-18 06:00:09', '2020-10-18 06:00:09'),
(7, 1400, 1, 'belum dibayar', '2020-10-18 06:00:50', '2020-10-18 06:00:50'),
(8, 1400, 1, 'belum dibayar', '2020-10-20 14:37:26', '2020-10-20 14:37:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_account`
--

CREATE TABLE `table_account` (
  `id_account` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `number_phone` int(20) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `table_account`
--

INSERT INTO `table_account` (`id_account`, `name`, `email`, `password`, `number_phone`, `status`, `created_at`, `update_at`) VALUES
(1, '', 'dion@gmail.com', '$2a$10$ERenWMH2E9HhbjCXOFgqluNDJo1052tk6Xq3f7GkS1od/NXpbJHM.', 9776, 1, '2020-10-17 06:06:12', '2020-10-17 06:06:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_order`
--

CREATE TABLE `table_order` (
  `id_order` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `id_price` int(11) NOT NULL,
  `order_name` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `table_order`
--

INSERT INTO `table_order` (`id_order`, `id_account`, `id_price`, `order_name`, `created_at`, `update_at`) VALUES
(1, 1, 0, '', '2020-10-17 15:14:54', '2020-10-17 15:14:54'),
(2, 1, 0, 'sri', '2020-10-17 15:24:08', '2020-10-17 15:24:08'),
(3, 1, 5, 'sriim', '2020-10-17 15:25:03', '2020-10-20 14:14:01'),
(4, 1, 0, 'bagio', '2020-10-17 15:25:12', '2020-10-17 15:25:12'),
(5, 1, 10, 'bagio', '2020-10-18 05:52:43', '2020-10-18 05:52:43'),
(6, 1, 10, 'bagio', '2020-10-18 05:56:43', '2020-10-18 05:56:43'),
(7, 1, 10, 'bagio', '2020-10-18 05:57:38', '2020-10-18 05:57:38'),
(8, 1, 10, 'bagio', '2020-10-18 06:00:09', '2020-10-18 06:00:09'),
(9, 1, 10, 'bagio', '2020-10-18 06:00:50', '2020-10-18 06:00:50'),
(10, 1, 10, 'bagio', '2020-10-20 14:37:26', '2020-10-20 14:37:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_price`
--

CREATE TABLE `table_price` (
  `id_price` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `id_plane` int(11) NOT NULL,
  `order_class` varchar(20) NOT NULL,
  `passangger` varchar(20) NOT NULL,
  `city_destination` varchar(20) NOT NULL,
  `city_depature` varchar(20) NOT NULL,
  `times_flight` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `table_price`
--

INSERT INTO `table_price` (`id_price`, `price`, `id_plane`, `order_class`, `passangger`, `city_destination`, `city_depature`, `times_flight`) VALUES
(1, 300, 1, 'economy', 'adult', 'jakarta', 'surabaya', 'pagi'),
(2, 150, 1, 'economy', 'child', 'jakarta', 'surabaya', 'pagi'),
(3, 500, 1, 'business', 'adult', 'jakarta', 'surabaya', 'pagi'),
(4, 250, 1, 'business', 'child', 'jakarta', 'surabaya', 'pagi'),
(5, 700, 1, 'first class', 'adult', 'jakarta', 'surabaya', 'pagi'),
(6, 350, 1, 'first class', 'child', 'jakarta', 'surabaya', 'pagi'),
(7, 200, 1, 'economy', 'adult', 'bali', 'surabaya', 'pagi'),
(8, 100, 1, 'economy', 'child', 'bali', 'surabaya', 'pagi'),
(9, 400, 1, 'business', 'adult', 'bali', 'surabaya', 'pagi'),
(10, 200, 1, 'business', 'child', 'bali', 'surabaya', 'pagi'),
(11, 600, 1, 'first class', 'adult', 'bali', 'surabaya', 'pagi'),
(12, 300, 1, 'first class', 'child', 'bali', 'surabaya', 'pagi'),
(13, 350, 2, 'economy', 'adult', 'jakarta', 'surabaya', 'pagi'),
(14, 175, 2, 'economy', 'child', 'jakarta', 'surabaya', 'pagi'),
(15, 550, 2, 'business', 'adult', 'jakarta', 'surabaya', 'pagi'),
(16, 275, 2, 'business', 'child', 'jakarta', 'surabaya', 'pagi'),
(17, 750, 2, 'first class', 'adult', 'jakarta', 'surabaya', 'pagi'),
(18, 375, 2, 'first class', 'child', 'jakarta', 'surabaya', 'pagi'),
(19, 450, 2, 'economy', 'adult', 'bali', 'surabaya', 'pagi'),
(20, 225, 2, 'economy', 'child', 'bali', 'surabaya', 'pagi'),
(21, 650, 2, 'business', 'adult', 'bali', 'surabaya', 'pagi'),
(22, 325, 2, 'business', 'child', 'bali', 'surabaya', 'pagi'),
(23, 850, 2, 'first class', 'adult', 'bali', 'surabaya', 'pagi'),
(24, 425, 2, 'first class', 'child', 'bali', 'surabaya', 'pagi');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id_payment`);

--
-- Indeks untuk tabel `table_account`
--
ALTER TABLE `table_account`
  ADD PRIMARY KEY (`id_account`);

--
-- Indeks untuk tabel `table_order`
--
ALTER TABLE `table_order`
  ADD PRIMARY KEY (`id_order`);

--
-- Indeks untuk tabel `table_price`
--
ALTER TABLE `table_price`
  ADD PRIMARY KEY (`id_price`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `payment`
--
ALTER TABLE `payment`
  MODIFY `id_payment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `table_account`
--
ALTER TABLE `table_account`
  MODIFY `id_account` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `table_order`
--
ALTER TABLE `table_order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
