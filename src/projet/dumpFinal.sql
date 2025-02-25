CREATE DATABASE  IF NOT EXISTS `db_remnant2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_remnant2`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: db_remnant2
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_amulet`
--

DROP TABLE IF EXISTS `t_amulet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_amulet` (
  `PK_Amulet` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `ModifiedValue` varchar(15) NOT NULL,
  `Modifier` decimal(10,0) NOT NULL,
  `isPercentage` tinyint NOT NULL,
  `description` varchar(150) NOT NULL,
  `secondaryValue` varchar(15) DEFAULT NULL,
  `secondaryModifier` decimal(10,0) DEFAULT NULL,
  `isPercentageSecondary` tinyint DEFAULT NULL,
  PRIMARY KEY (`PK_Amulet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_amulet`
--

LOCK TABLES `t_amulet` WRITE;
/*!40000 ALTER TABLE `t_amulet` DISABLE KEYS */;
INSERT INTO `t_amulet` VALUES (1,'Effluvium Enhancer','AcidDamage',25,1,'Increases Acid damage by 25% and corrosive damage by 50%','CorrosiveDamage',50,1),(2,'Gunslinger\'s Charm','Firerate',15,1,'Increases Fire Rate by 15% and Reload Speed by 25%','ReloadSpeed',25,1),(3,'Legacy Protocol','SkillCooldown',-20,1,'Reduces Skill Cooldowns by 20% and increases Skill Duration by 15%','SkillDuration',15,1),(4,'Leto\'s Amulet','Encumberance',-40,1,'Reduces Encumbrance by 40% and Stamina Cost by 35%','StaminaCost',-35,1),(5,'Shock Device','ShockDamage',25,1,'Increases SHOCK damage by 25% and OVERLOADED damage by 50%','OverloadedDamag',50,1),(6,'Talisman of the Sun','FireDamage',25,1,'Increases FIRE damage by 25% and BURNING damage by 50%','BurningDamage',50,1),(7,'Twisted Idol','ArmorEffectiven',35,1,'Increases Armor Effectiveness by 35% and reduces Encumbrance by 20.','Encumberance',-20,0),(8,'Effigy Pendant','AllDamage',15,1,'While Grey Health is present, gain 15% to all damage dealt and 10% damage reduction','DamageReduction',10,1);
/*!40000 ALTER TABLE `t_amulet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_archetype`
--

DROP TABLE IF EXISTS `t_archetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_archetype` (
  `PK_Archetype` int NOT NULL,
  `Name` varchar(15) NOT NULL,
  PRIMARY KEY (`PK_Archetype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_archetype`
--

LOCK TABLES `t_archetype` WRITE;
/*!40000 ALTER TABLE `t_archetype` DISABLE KEYS */;
INSERT INTO `t_archetype` VALUES (1,'Ritualist'),(2,'Engineer'),(3,'Medic');
/*!40000 ALTER TABLE `t_archetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_build`
--

DROP TABLE IF EXISTS `t_build`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_build` (
  `PK_Build` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `FK_User` int NOT NULL,
  `FK_Amulet` int DEFAULT NULL,
  `FK_Helmet` int DEFAULT NULL,
  `FK_Chestplate` int DEFAULT NULL,
  `FK_Gauntlets` int DEFAULT NULL,
  `FK_Greaves` int DEFAULT NULL,
  `FK_Archetype_Primary` int DEFAULT NULL,
  `FK_Archetype_Secondary` int DEFAULT NULL,
  PRIMARY KEY (`PK_Build`),
  KEY `fk_T_Build_T_Amulet_idx` (`FK_Amulet`),
  KEY `fk_T_Build_T_User1_idx` (`FK_User`),
  KEY `fk_T_Build_T_Helmet1_idx` (`FK_Helmet`),
  KEY `fk_T_Build_T_Chestplate1_idx` (`FK_Chestplate`),
  KEY `fk_T_Build_T_Gauntlets1_idx` (`FK_Gauntlets`),
  KEY `fk_T_Build_T_Greaves1_idx` (`FK_Greaves`),
  KEY `fk_T_Build_T_Archetype1_idx` (`FK_Archetype_Primary`),
  KEY `fk_T_Build_T_Archetype2_idx` (`FK_Archetype_Secondary`),
  CONSTRAINT `fk_T_Build_T_Amulet` FOREIGN KEY (`FK_Amulet`) REFERENCES `t_amulet` (`PK_Amulet`),
  CONSTRAINT `fk_T_Build_T_Archetype1` FOREIGN KEY (`FK_Archetype_Primary`) REFERENCES `t_archetype` (`PK_Archetype`),
  CONSTRAINT `fk_T_Build_T_Archetype2` FOREIGN KEY (`FK_Archetype_Secondary`) REFERENCES `t_archetype` (`PK_Archetype`),
  CONSTRAINT `fk_T_Build_T_Chestplate1` FOREIGN KEY (`FK_Chestplate`) REFERENCES `t_chestplate` (`PK_Chestplate`),
  CONSTRAINT `fk_T_Build_T_Gauntlets1` FOREIGN KEY (`FK_Gauntlets`) REFERENCES `t_gauntlets` (`PK_Gauntlets`),
  CONSTRAINT `fk_T_Build_T_Greaves1` FOREIGN KEY (`FK_Greaves`) REFERENCES `t_greaves` (`PK_Greaves`),
  CONSTRAINT `fk_T_Build_T_Helmet1` FOREIGN KEY (`FK_Helmet`) REFERENCES `t_helmet` (`PK_Helmet`),
  CONSTRAINT `fk_T_Build_T_User1` FOREIGN KEY (`FK_User`) REFERENCES `t_user` (`PK_User`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_build`
--

LOCK TABLES `t_build` WRITE;
/*!40000 ALTER TABLE `t_build` DISABLE KEYS */;
INSERT INTO `t_build` VALUES (3,'test1337',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `t_build` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_chestplate`
--

DROP TABLE IF EXISTS `t_chestplate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_chestplate` (
  `PK_Chestplate` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Armor` decimal(10,0) NOT NULL,
  `Weight` decimal(10,0) NOT NULL,
  PRIMARY KEY (`PK_Chestplate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_chestplate`
--

LOCK TABLES `t_chestplate` WRITE;
/*!40000 ALTER TABLE `t_chestplate` DISABLE KEYS */;
INSERT INTO `t_chestplate` VALUES (1,'Radiant Protector',69,32),(2,'Crimson Guard Plate',61,27),(3,'Elder Raiment',30,12),(4,'Leto Mark I Armor',90,48),(5,'Space Worker Body',28,11),(6,'High Noon Duds',47,20),(7,'Nanoplated Vestments',30,12);
/*!40000 ALTER TABLE `t_chestplate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_gauntlets`
--

DROP TABLE IF EXISTS `t_gauntlets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_gauntlets` (
  `PK_Gauntlets` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Armor` decimal(10,0) NOT NULL,
  `Weight` decimal(10,0) NOT NULL,
  PRIMARY KEY (`PK_Gauntlets`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_gauntlets`
--

LOCK TABLES `t_gauntlets` WRITE;
/*!40000 ALTER TABLE `t_gauntlets` DISABLE KEYS */;
INSERT INTO `t_gauntlets` VALUES (1,'Radiant Bracers',17,8),(2,'Crimson Guard Gauntlets',15,7),(3,'Elder Gloves',8,3),(4,'Leto Mark I Gloves',23,12),(5,'Space Worker Gloves',7,3),(6,'High Noon Armguards',12,5),(7,'Nanoplated Hands',7,3);
/*!40000 ALTER TABLE `t_gauntlets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_greaves`
--

DROP TABLE IF EXISTS `t_greaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_greaves` (
  `PK_Greaves` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Armor` decimal(10,0) NOT NULL,
  `Weight` decimal(10,0) NOT NULL,
  PRIMARY KEY (`PK_Greaves`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_greaves`
--

LOCK TABLES `t_greaves` WRITE;
/*!40000 ALTER TABLE `t_greaves` DISABLE KEYS */;
INSERT INTO `t_greaves` VALUES (1,'Radiant Greaves',35,16),(2,'Crimson Guard Sabatons',30,13),(3,'Elder Leggings',15,6),(4,'Leto Mark I Leggings',45,24),(5,'Space Worker Legs',14,6),(6,'High Noon Soles',23,10),(7,'Nanoplated Waist',15,6);
/*!40000 ALTER TABLE `t_greaves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_helmet`
--

DROP TABLE IF EXISTS `t_helmet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_helmet` (
  `PK_Helmet` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Armor` decimal(10,0) NOT NULL,
  `Weight` decimal(10,0) NOT NULL,
  PRIMARY KEY (`PK_Helmet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_helmet`
--

LOCK TABLES `t_helmet` WRITE;
/*!40000 ALTER TABLE `t_helmet` DISABLE KEYS */;
INSERT INTO `t_helmet` VALUES (1,'Radiant Visage',17,8),(2,'Crimson Guard Shroud',16,7),(3,'Elder Headdress',8,3),(4,'Leto Mark I Helmet',23,12),(5,'Space Worker Mask',7,3),(6,'High Noon Hat',12,5),(7,'Nanoplated Transmitter',12,5),(8,'Crown of the Red Prince',6,6);
/*!40000 ALTER TABLE `t_helmet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ring`
--

DROP TABLE IF EXISTS `t_ring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_ring` (
  `PK_Ring` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `ModifiedValue` varchar(15) NOT NULL,
  `Modifier` double NOT NULL,
  `isPercentage` tinyint NOT NULL,
  `description` varchar(150) NOT NULL,
  `secondaryValue` varchar(15) DEFAULT NULL,
  `secondaryModifier` double DEFAULT NULL,
  `isPercentageSecondary` tinyint DEFAULT NULL,
  PRIMARY KEY (`PK_Ring`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ring`
--

LOCK TABLES `t_ring` WRITE;
/*!40000 ALTER TABLE `t_ring` DISABLE KEYS */;
INSERT INTO `t_ring` VALUES (1,'Alumni Ring','ElementalDamage',10,1,'Increases all Elemental damage dealt by 10%',NULL,NULL,NULL),(2,'Black Pawn Stamp','SkillCooldown',-10,1,'Reduces Cooldowns of Skills by 10%',NULL,NULL,NULL),(3,'Blasting Cap Ring','ExplosiveDamage',15,1,'Increases Explosive damage by 15%',NULL,NULL,NULL),(4,'Bloodless King\'s Vow','RangedLifesteal',4,1,'Gain 4% of base Ranged Damage dealt as Lifesteal.',NULL,NULL,NULL),(5,'Braided Thorns','CritChance',10,1,'Increases Critical Chance by 10%',NULL,NULL,NULL),(6,'Burden of the Destroyer','GunRange',-35,1,'Decreases Range of all Firearms by 35%. Increases all damage dealt by 15%.','AllDamage',15,1),(7,'Burden of the Rebel','RelicSpeed',-25,1,'Reduces Relic Use Speed by 25%. Reduces Skill Cooldowns by 15%','SkillCooldown',-15,1),(8,'Celerity Stone','RelicSpeed',25,1,'Increases Consumable and Relic Use Speed by 25%','ConsumableSpeed',25,1),(9,'Dead King\'s Memento','Health',15,0,'Increases Health by 15',NULL,NULL,NULL),(10,'Dran Memento','Stamina',20,0,'Increases Max Stamina by 20 and reduces Encumbrance by 5','Encumberance',-5,0),(11,'Dying Ember','MeleeLifesteal',6,1,'Gain 6% of base Melee damage dealt as Lifesteal',NULL,NULL,NULL),(12,'Elevated Ring','DodgeThreshhold',10,0,'Increases Dodge Weight Threshold by 10. Reduces Encumbrance by 10','Encumberance',-10,0),(13,'Fae Hunter Ring','GunRange',35,1,'Increases Range of Firearms by 35%',NULL,NULL,NULL),(14,'Fae Shaman Ring','HPRegen',0.35,0,'Increases Health Regeneration by 0.35 and Relic Use Speed by 25%.','RelicSpeed',25,1),(15,'Fae Warrior Ring','MeleeDamage',15,1,'Increases Melee Damage by 15%',NULL,NULL,NULL),(16,'Gunslinger\'s Ring','GunSwapSpeed',30,1,'Increases Firearm Swap Speed by 30% and Reload Speed by 10%','ReloadSpeed',10,1),(17,'Heart of the Wolf','Stamina',25,0,'Increases Max Stamina by 25 and Movement Speed by 10%','MouvementSpeed',10,1),(18,'Lithic Signet','DamageReduction',7,1,'Reduces all incoming damage by 7%',NULL,NULL,NULL),(19,'Meteorite Shard Ring','Encumberance',50,0,'Increases Encumbrance by 50. Increases Unarmed damage by 50%','UnarmedDamage',50,1),(20,'Probability Cord','CritDamage',20,1,'Increases Crit Damage by 20%',NULL,NULL,NULL),(21,'Ring of Infinite Damage','FireRate',8,1,'Increases fire rate by 8%',NULL,NULL,NULL),(22,'Ring of the Robust','Health',10,0,'Increases Max Health by 10 and Armor by 20','Armor',20,0),(23,'Seal of the Empress','Health',20,0,'Increases Max Health by 20. Reduces Max Stamina by 5','Stamina',-5,0),(24,'Stone of Balance','AllDamage',7,1,'Increases all damage by 7%',NULL,NULL,NULL),(25,'Wind Hollow Circlet','ReloadSpeed',12,1,'Increases Reload Speed by 12%',NULL,NULL,NULL),(26,'Hardened Coil','DamageReduction',15,1,'Reduces all incoming damage by 3% for each 10% of missing Health. Max 15% reduction. bonus assumed at max Strength',NULL,NULL,NULL);
/*!40000 ALTER TABLE `t_ring` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user` (
  `PK_User` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Password` varchar(64) NOT NULL,
  PRIMARY KEY (`PK_User`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'test','$2y$10$hdVaD9toIt7KEiJXqRMoROtcefu4ldHBsq5GliGAaUgWcE4bTMkvW'),(9,'','$2y$10$bbI8bQ5z6WtHGMw22oZ70efpalISCXsbx3N791mkqachym39geocK');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_build_ring`
--

DROP TABLE IF EXISTS `tr_build_ring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tr_build_ring` (
  `FK_Build` int NOT NULL,
  `FK_Ring` int NOT NULL,
  PRIMARY KEY (`FK_Build`,`FK_Ring`),
  KEY `fk_T_Build_has_T_Ring_T_Ring1_idx` (`FK_Ring`),
  KEY `fk_T_Build_has_T_Ring_T_Build1_idx` (`FK_Build`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_T_Build_has_T_Ring_T_build1` FOREIGN KEY (`FK_Build`) REFERENCES `t_build` (`PK_Build`),
  CONSTRAINT `fk_T_Build_has_T_Ring_T_Ring1` FOREIGN KEY (`FK_Ring`) REFERENCES `t_ring` (`PK_Ring`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_build_ring`
--

LOCK TABLES `tr_build_ring` WRITE;
/*!40000 ALTER TABLE `tr_build_ring` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_build_ring` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-25 11:42:50
