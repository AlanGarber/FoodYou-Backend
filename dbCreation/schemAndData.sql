USE [master]
GO
/****** Object:  Database [FoodYou]    Script Date: 1/7/2022 12:11:12 ******/
CREATE DATABASE [FoodYou]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'FoodYou', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\FoodYou.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'FoodYou_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\FoodYou_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [FoodYou] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FoodYou].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [FoodYou] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [FoodYou] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [FoodYou] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [FoodYou] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [FoodYou] SET ARITHABORT OFF 
GO
ALTER DATABASE [FoodYou] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [FoodYou] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [FoodYou] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [FoodYou] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [FoodYou] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [FoodYou] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [FoodYou] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [FoodYou] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [FoodYou] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [FoodYou] SET  DISABLE_BROKER 
GO
ALTER DATABASE [FoodYou] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [FoodYou] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [FoodYou] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [FoodYou] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [FoodYou] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [FoodYou] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [FoodYou] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [FoodYou] SET RECOVERY FULL 
GO
ALTER DATABASE [FoodYou] SET  MULTI_USER 
GO
ALTER DATABASE [FoodYou] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [FoodYou] SET DB_CHAINING OFF 
GO
ALTER DATABASE [FoodYou] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [FoodYou] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [FoodYou] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'FoodYou', N'ON'
GO
ALTER DATABASE [FoodYou] SET QUERY_STORE = OFF
GO
USE [FoodYou]
GO
/****** Object:  User [alumno]    Script Date: 1/7/2022 12:11:13 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [Alan]    Script Date: 1/7/2022 12:11:13 ******/
CREATE USER [Alan] FOR LOGIN [Alan] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Alan]
GO
/****** Object:  Table [dbo].[Disorder]    Script Date: 1/7/2022 12:11:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Disorder](
	[idDisorder] [int] IDENTITY(1,1) NOT NULL,
	[nameDisorder] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Disorder] PRIMARY KEY CLUSTERED 
(
	[idDisorder] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 1/7/2022 12:11:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[idProduct] [int] IDENTITY(1,1) NOT NULL,
	[productName] [varchar](255) NOT NULL,
	[productImage] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductXDisorder]    Script Date: 1/7/2022 12:11:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductXDisorder](
	[idInter] [int] IDENTITY(1,1) NOT NULL,
	[idProduct] [int] NULL,
	[idDisorder] [int] NULL,
 CONSTRAINT [PK_ProductXDisorder] PRIMARY KEY CLUSTERED 
(
	[idInter] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 1/7/2022 12:11:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[idUser] [int] IDENTITY(1,1) NOT NULL,
	[profilePic] [varchar](max) NOT NULL,
	[userName] [varchar](50) NOT NULL,
	[userPassword] [varchar](50) NOT NULL,
	[mail] [varchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[idUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserXDisorder]    Script Date: 1/7/2022 12:11:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserXDisorder](
	[idUser] [int] NOT NULL,
	[idDisorder] [int] NOT NULL,
 CONSTRAINT [PK_UserXDisorder] PRIMARY KEY CLUSTERED 
(
	[idUser] ASC,
	[idDisorder] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Disorder] ON 

INSERT [dbo].[Disorder] ([idDisorder], [nameDisorder]) VALUES (1, N'Vegan')
INSERT [dbo].[Disorder] ([idDisorder], [nameDisorder]) VALUES (2, N'Vegetarian')
INSERT [dbo].[Disorder] ([idDisorder], [nameDisorder]) VALUES (3, N'Celiac')
INSERT [dbo].[Disorder] ([idDisorder], [nameDisorder]) VALUES (4, N'Lactose Intolerant')
INSERT [dbo].[Disorder] ([idDisorder], [nameDisorder]) VALUES (5, N'Diabetic')
SET IDENTITY_INSERT [dbo].[Disorder] OFF
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([idProduct], [productName], [productImage]) VALUES (1, N'Chocoarroz', N'foton')
INSERT [dbo].[Product] ([idProduct], [productName], [productImage]) VALUES (2, N'Succeso', N'foto')
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
USE [master]
GO
ALTER DATABASE [FoodYou] SET  READ_WRITE 
GO
