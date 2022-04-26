# near-demoproject-BMI

This project developed in Patika.dev's Near Bootcamp.
Here is Loom video : https://www.loom.com/share/ae7f29fec1af439a8bfe1231785d0da7

## What is the project about ? 
The main idea is to adapt the body mass index calculation to the blockchain part. With Web3 technology, you can safely continue to calculate your body mass index. The only process required for this is to have a NEAR wallet. Then you can easily calculate your body mass index. Your body mass index calculation process is completed.

## Project Requisities
1. npm
2. Current version of Node.js
3. yarn <br>
to install:  npm install --global yarn (or just npm i -g yarn)
4. You need near-cli installed globally. Here's how:<br>
npm install --global near-cli
This will give you the near CLI tool. Ensure that it's installed with:
near --version

### Getting started
1. Clone this repo to a local folder
2. run yarn (This will install the dependencies so that we won’t have a problem related to that.)
3. yarn build:release
4. yarn deploy
 
Copy your Contract id, contract id looks like this dev-1650807761125-26797947252773

Export it so you do not have to copy and paste it while calling contract methods: 

export CONTRACT=YOUR-CONTRACT-ID
<img width="860" alt="createBMI" src="https://github.com/Selahaddin64/near-demoproject-BMI/blob/main/images/deploy%20etme.jpg">

## Functions
| View Funcs        | Call Funcs |          
| ------------- |-------------:| 
| getBMIById()    | createBMI() |
| listAllBMI()    | updateBMI()      |  
|                 |delBMI()      |   


***
### **createBMI** <br>
This function gives you access to add your body mass index calculation. <br>

Function Parameters:<br>


| Parameter        | Type           | 
| ------------- |:-------------:|
| weight     | f32 | 
| height      | f32      |  


Usage:<br>

```
near call $CONTRACT createBMI '{"weight":50.1, "height":1.70}' --accountId bay_odyolog.testnet
```
<img width="860" alt="createBMI" src="https://github.com/Selahaddin64/near-demoproject-BMI/blob/main/images/createBMI.jpg">

### **getBMIById** <br>
This function allows you to access body mass index account data by their ID. <br>

Function Parameters:<br>


| Parameter        | Type           | 
| ------------- |:-------------:|
| id     | u32 | 


Usage:<br>

```
near view $CONTRACT getBMIById '{"id":TypeID}'
```
<img width="860" alt="createBMI" src="https://github.com/Selahaddin64/near-demoproject-BMI/blob/main/images/getBMIById.jpg">

### **updateBMI** <br>
This function allows you to access up-to-date body mass index calculation data by their ID. <br>

Function Parameters:<br>


| Parameter        | Type           | 
| ------------- |:-------------:|
| id     | u32 | 
| updates     | UpdatedBMI`object` | 

Usage:<br>

```
near call $CONTRACT updateBMI '{"id":TypeID, "updates":{"weight":61.1, "height":1.75} }' --accountId bay_odyolog.testnet
```
<img width="860" alt="createBMI" src="https://github.com/Selahaddin64/near-demoproject-BMI/blob/main/images/updateBMI.jpg">

### **delBMI** <br>
This function gives you access to delete body mass index calculation data.<br>

Function Parameters:<br>
* This function has no arguments.


Usage:<br>

```
near call $CONTRACT delBMI '{"id":TypeID}' --accountId bay_odyolog.testnet
```
<img width="860" alt="createBMI" src="https://github.com/Selahaddin64/near-demoproject-BMI/blob/main/images/delBMI.jpg">

### **listAllBMI** <br>
This function gives you access to the whole body mass index calculator list.. <br>

Function Parameters:<br>
* This function has no arguments.

Usage:<br>

```
near view $CONTRACT listAllBMI '{"offset":0}' --accountId bay_odyolog.testnet
```
<img width="860" alt="createBMI" src="https://github.com/Selahaddin64/near-demoproject-BMI/blob/main/images/listAllBMI.jpg">
