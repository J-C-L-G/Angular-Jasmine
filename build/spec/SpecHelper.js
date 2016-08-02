/**
 * Created by JCLG on 7/31/2016.
 */
/*To declare custom matchers*/

var customMatchers = {
    toBeAReasonableExpense : function(){
        return {
            compare : function(actual){
                var pass = actual.isReasonable(),
                    judgement = pass ? 'reasobable' : 'unreasonable';

                return {
                    pass : pass,
                    message : 'Expected expense to be a ' + judgement + 'expense.'
                }
            }
        }
    }
}