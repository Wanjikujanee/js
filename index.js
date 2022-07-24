
class Mkulima{
    constructor(){
    this.farmproduce = [];
    this.Vendor = [];
    this.product = [];
    this.addFarm = (farmId, farmName, farmer, phoneNumber, address) => {
    this.farmproduce.push({farmId,farmName,farmer,phoneNumber,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.farmproduce.find(item => item.farmId ===farmId);
    let farmIndex = this.farmproduce.indexOf(specific);
    this.farmproduce.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farmproduce.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phoneNumber =newPhoneNumber;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farmproduce.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specifiedProduct = this.product.find(item => item.productId ===productId)
    specifiedProduct.productId =newProductId;
    specifiedProduct.productName = newProductName;
    specifiedProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProduct = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specifiedProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specifiedProduct.productName} for KES ${quantity*specifiedProduct.price}`);
    }
    }
    }
    let newfarm = new Mkulima();
    newfarm.addFarm("200800","Owuor","ArceFund","0734567499", "Kakamega");
    newfarm.addFarm("160840","Francis","TwigaFood","0794736350", "Nairobi");
    newfarm.addFarm("30415","Waithera","AgventureFarm","0757775832", "Machakos");
    newfarm.addFarm("37821","Brian","FreshFields","0789256287", "Uasin Gishu");
    console.log(newfarm.farmproduce);
    newfarm.removeFarm("8009");
    console.log() 