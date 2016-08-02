/**
 * Created by JCLG on 7/31/2016.
 */
function ExpenseItem(type, description, amount){
    this.type = type;
    this.description = description;
    this.amount = amount;
};

ExpenseItem.prototype.isReasonable = function(){
    return (this.amount <= 100);
};