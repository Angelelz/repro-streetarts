CREATE TABLE `carts` (
	`id_cart` int AUTO_INCREMENT NOT NULL,
	`id_address_delivery` int,
	`id_address_invoice` int,
	`id_store` int,
	`id_customer` int,
	`id_currency` int,
	`secure_key` varchar(256),
	`date_add` datetime,
	`date_update` datetime,
	CONSTRAINT `carts_id_cart` PRIMARY KEY(`id_cart`)
);
--> statement-breakpoint
CREATE TABLE `carts_form_products` (
	`id_carts_formula` int,
	`id_product` int,
	`quantity` int
);
--> statement-breakpoint
CREATE TABLE `carts_formulas` (
	`id_cart_formula` int AUTO_INCREMENT NOT NULL,
	`id_cart` int,
	`id_formula` int,
	`quantity` int,
	CONSTRAINT `carts_formulas_id_cart_formula` PRIMARY KEY(`id_cart_formula`)
);
--> statement-breakpoint
CREATE TABLE `carts_products` (
	`id_cart` int,
	`id_product` int
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id_category` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100),
	`icon` varchar(256),
	CONSTRAINT `categories_id_category` PRIMARY KEY(`id_category`)
);
--> statement-breakpoint
CREATE TABLE `continents` (
	`id_continents` int AUTO_INCREMENT NOT NULL,
	`code` varchar(2),
	`name` varchar(30),
	CONSTRAINT `continents_id_continents` PRIMARY KEY(`id_continents`)
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`id_country` int AUTO_INCREMENT NOT NULL,
	`code` varchar(2),
	`name` varchar(100),
	`phone` varchar(20),
	`symbol` varchar(10),
	`currency` varchar(3),
	`continent` varchar(30),
	`continent_code` varchar(2),
	`alpha_3` char(3),
	CONSTRAINT `countries_id_country` PRIMARY KEY(`id_country`)
);
--> statement-breakpoint
CREATE TABLE `currencies` (
	`id_currency` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `currencies_id_currency` PRIMARY KEY(`id_currency`)
);
--> statement-breakpoint
CREATE TABLE `customers` (
	`id_customer` int AUTO_INCREMENT NOT NULL,
	`id_gender` int,
	`id_lang` int,
	`id_group` int,
	`firstname` varchar(256) NOT NULL,
	`lastname` varchar(256) NOT NULL,
	`id_clerk` varchar(255),
	`phone_number` varchar(20),
	`email` varchar(256),
	`password` varchar(256),
	`last_password_gen` timestamp,
	`birthday` date,
	`profile_picture` varchar(256),
	`date_add` datetime,
	`date_update` datetime,
	CONSTRAINT `customers_id_customer` PRIMARY KEY(`id_customer`)
);
--> statement-breakpoint
CREATE TABLE `formulas` (
	`id_formula` int AUTO_INCREMENT NOT NULL,
	`id_section` int,
	`name` varchar(256),
	`description` tinytext,
	`picture` varchar(256),
	`buying_price` decimal,
	`selling_price` decimal,
	`price_saled` decimal,
	`on_sale` boolean DEFAULT false,
	`quantity` int,
	`minimal_quantity` int,
	`is_featured` boolean DEFAULT false,
	`visible` boolean DEFAULT false,
	`date_add` datetime,
	`date_update` datetime,
	CONSTRAINT `formulas_id_formula` PRIMARY KEY(`id_formula`)
);
--> statement-breakpoint
CREATE TABLE `formulas_products` (
	`id_formula` int,
	`id_product` int,
	`maximal_quantity` int
);
--> statement-breakpoint
CREATE TABLE `genders` (
	`id_gender` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `genders_id_gender` PRIMARY KEY(`id_gender`)
);
--> statement-breakpoint
CREATE TABLE `groups` (
	`id_group` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `groups_id_group` PRIMARY KEY(`id_group`)
);
--> statement-breakpoint
CREATE TABLE `langs` (
	`id_lang` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100),
	`iso_code` varchar(5),
	CONSTRAINT `langs_id_lang` PRIMARY KEY(`id_lang`)
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id_orders` int AUTO_INCREMENT NOT NULL,
	`id_cart` int,
	`id_customer` int,
	`id_store` int,
	`id_order_state` int,
	`reference` varchar(256),
	`id_address_delivery` int,
	`id_address_invoice` int,
	`total_paid` decimal,
	`total_paid_tax_included` decimal,
	`total_shipping` decimal,
	`total_shipping_tax_included` decimal,
	`total_discount` decimal,
	`total_discount_tax_included` decimal,
	`total_wrapping` decimal,
	`total_wrapping_tax_included` decimal,
	`id_invoice` int,
	`id_payment_method` int,
	`date_add` datetime,
	`date_update` datetime,
	CONSTRAINT `orders_id_orders` PRIMARY KEY(`id_orders`)
);
--> statement-breakpoint
CREATE TABLE `orders_states` (
	`id_order_state` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`send_email` boolean,
	`send_notification` boolean,
	CONSTRAINT `orders_states_id_order_state` PRIMARY KEY(`id_order_state`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id_product` int AUTO_INCREMENT NOT NULL,
	`id_section` int,
	`name` varchar(256),
	`description` tinytext,
	`picture` varchar(256),
	`buying_price` decimal,
	`selling_price` decimal,
	`price_saled` decimal,
	`on_sale` boolean DEFAULT false,
	`quantity` int,
	`minimal_quantity` int,
	`is_featured` boolean DEFAULT false,
	`visible` boolean DEFAULT false,
	`date_add` datetime,
	`date_update` datetime,
	CONSTRAINT `products_id_product` PRIMARY KEY(`id_product`)
);
--> statement-breakpoint
CREATE TABLE `stores` (
	`id_store` int AUTO_INCREMENT NOT NULL,
	`cuid_store` varchar(191) NOT NULL,
	`id_currency` int,
	`name` varchar(256),
	`baseline` varchar(256),
	`realtime_position` float,
	`last_position_updated` timestamp,
	`profile_picture` varchar(256),
	`featured_label` varchar(256) DEFAULT 'Populaire',
	`siret` varchar(14),
	`ape` varchar(5),
	`wrapping_enabled` boolean DEFAULT false,
	`wrapping_price` decimal,
	`cutleries_enabled` boolean DEFAULT false,
	`cutleries_price` decimal,
	`date_add` datetime,
	`date_update` datetime,
	CONSTRAINT `stores_id_store` PRIMARY KEY(`id_store`)
);
--> statement-breakpoint
CREATE TABLE `stores_categories` (
	`id_store` int,
	`id_category` int
);
--> statement-breakpoint
CREATE TABLE `stores_pictures` (
	`id_picture` int AUTO_INCREMENT NOT NULL,
	`id_store` int,
	`img_url` varchar(255),
	CONSTRAINT `stores_pictures_id_picture` PRIMARY KEY(`id_picture`)
);
--> statement-breakpoint
CREATE TABLE `stores_products_sections` (
	`id_section` int AUTO_INCREMENT NOT NULL,
	`id_store` int,
	`name` varchar(256),
	`section_order` int,
	CONSTRAINT `stores_products_sections_id_section` PRIMARY KEY(`id_section`)
);
--> statement-breakpoint
CREATE TABLE `stores_reviews` (
	`id_review` int AUTO_INCREMENT NOT NULL,
	`id_store` int,
	`rating` int,
	`date` datetime,
	`commentary` tinytext,
	CONSTRAINT `stores_reviews_id_review` PRIMARY KEY(`id_review`)
);
--> statement-breakpoint
CREATE TABLE `stores_team` (
	`id_store` int NOT NULL,
	`id_customer` int NOT NULL,
	`status` enum('owner','employee')
);
--> statement-breakpoint
ALTER TABLE `carts` ADD CONSTRAINT `carts_id_store_stores_id_store_fk` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts` ADD CONSTRAINT `carts_id_customer_customers_id_customer_fk` FOREIGN KEY (`id_customer`) REFERENCES `customers`(`id_customer`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts` ADD CONSTRAINT `carts_id_currency_currencies_id_currency_fk` FOREIGN KEY (`id_currency`) REFERENCES `currencies`(`id_currency`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts_form_products` ADD CONSTRAINT `cartsla_fk` FOREIGN KEY (`id_carts_formula`) REFERENCES `carts_formulas`(`id_cart_formula`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts_form_products` ADD CONSTRAINT `carts_focts_id_product_fk` FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts_formulas` ADD CONSTRAINT `carts_formulas_id_cart_carts_id_cart_fk` FOREIGN KEY (`id_cart`) REFERENCES `carts`(`id_cart`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts_formulas` ADD CONSTRAINT `carts_formulas_id_ula_fk` FOREIGN KEY (`id_formula`) REFERENCES `formulas`(`id_formula`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts_products` ADD CONSTRAINT `carts_products_id_cart_fk` FOREIGN KEY (`id_cart`) REFERENCES `carts`(`id_cart`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `carts_products` ADD CONSTRAINT `caructs_id_produucts_id_product_fk` FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `customers` ADD CONSTRAINT `customersders_id_gender_fk` FOREIGN KEY (`id_gender`) REFERENCES `genders`(`id_gender`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `customers` ADD CONSTRAINT `customers_id_lang_langs_id_lang_fk` FOREIGN KEY (`id_lang`) REFERENCES `langs`(`id_lang`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `customers` ADD CONSTRAINT `customers_id_group_groups_id_group_fk` FOREIGN KEY (`id_group`) REFERENCES `groups`(`id_group`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `formulas` ADD CONSTRAINT `formulas_id_sectk` FOREIGN KEY (`id_section`) REFERENCES `stores_products_sections`(`id_section`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `formulas_products` ADD CONSTRAINT `formulas_productformulas_id_formula_fk` FOREIGN KEY (`id_formula`) REFERENCES `formulas`(`id_formula`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `formulas_products` ADD CONSTRAINT `formulas_producucts_id_product_fk` FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orders` ADD CONSTRAINT `orders_id_cart_carts_id_cart_fk` FOREIGN KEY (`id_cart`) REFERENCES `carts`(`id_cart`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orders` ADD CONSTRAINT `orders_id_customer_customers_id_customer_fk` FOREIGN KEY (`id_customer`) REFERENCES `customers`(`id_customer`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orders` ADD CONSTRAINT `orders_id_store_stores_id_store_fk` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orders` ADD CONSTRAINT `orders_id_order_stateder_state_fk` FOREIGN KEY (`id_order_state`) REFERENCES `orders_states`(`id_order_state`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_id_section_sto` FOREIGN KEY (`id_section`) REFERENCES `stores_products_sections`(`id_section`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `stores` ADD CONSTRAINT `stores_id_currency_currencies_id_currency_fk` FOREIGN KEY (`id_currency`) REFERENCES `currencies`(`id_currency`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `stores_categories` ADD CONSTRAINT `_store_fk` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `stores_categories` ADD CONSTRAINT `stores_categories_id_cat_fk` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id_category`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `stores_pictures` ADD CONSTRAINT `storese_fk` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `stores_products_sections` ADD CONSTRAINT `s_id_store_stores_id_store_fk` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `stores_reviews` ADD CONSTRAINT `stores_revieid_store_fk` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `stores_team` ADD CONSTRAINT `stores_team_id_store_` FOREIGN KEY (`id_store`) REFERENCES `stores`(`id_store`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `stores_team` ADD CONSTRAINT `storemers_id_customer_fk` FOREIGN KEY (`id_customer`) REFERENCES `customers`(`id_customer`) ON DELETE cascade ON UPDATE cascade;
