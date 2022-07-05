USE [FoodYou]
GO
CREATE LOGIN [Alan] WITH PASSWORD=N'Tomi', DEFAULT_DATABASE=[FoodYou], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [FoodYou]
GO
CREATE USER [Alan] FOR LOGIN [Alan]
GO
USE [FoodYou]
GO
ALTER ROLE [db_owner] ADD MEMBER [Alan]
GO