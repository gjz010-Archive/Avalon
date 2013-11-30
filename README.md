Avalon
======

Avalon project is the fourth project of Nekocraft which comes from the idea of @pa001024.Its aim is to create a distributed cloud server for Minecraft,whose parts can be put on different servers(For example,queue on this server,server node on that server and database on another server).It would be written in C/C++(Deprecated) or Node.js(Indev).

https://github.com/Nekocraft/TODO/issues/21
AvalonSE & Quartz
------
The server part of the project.It has 6 parts:AvalonSE,AvalonMQ,AvalonWorker,AvalonActor,AvalonVM,AvalonDB.

###AvalonSE
AvalonSE is the main part and a basic node of the server.It consists of AvalonActor,AvalonVM and AvalonDB.Its parts can connect to it via the network,and it connects to the client through TCP hole punching,and it communicate with AvalonMQ via TCP.
###AvalonMQ
AvalonMQ is the extenal part of the server,which clients connect to directly.It allocate the clients to the AvalonSE nodes and coordinates the relationship among server nodes,client and the database.
###AvalonWorker and AvalonActor
AvalonWorker(s) and AvalonActor work as MVC model.AvalonWorker offers direct interfaces to access the client or the server,and AvalonActor packs the interfaces and offers friendly APIs.AvalonWorker contains AvalonVT which is made to coordinate the events in the game and increase the server's efficiency.A server or a client may create more than one AvalonWorkers which work in a asynchronous way(That's the reason I want to use Node.js).AvalonActor contains Quartz(originally VanillaSE) and ScriptSE,the first of which offers basic Minecraft APIs and features together with AvalonWorker,and the second offers hot-deployment-supported script system.
###AvalonVM
AvalonVM is a framework which helps to spread data among servers and clients.It bases on UDP and it has a procotol called SCTP(Simple Chunk Transfer Protocol) which is a part of Avalon Protocol.
###AvalonDB
AvalonDB is the database of the server.It consists of ChunkFS which stores chunk data in LevelDB,and a NOSQL database which stores entity data and so on.
AvalonCE
------
It has 2 parts:AvalonWorker and AvalonVM.
