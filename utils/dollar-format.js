export function convertUSDFormat(number) {
     // formating 
     let dollarFormatUS = Intl.NumberFormat('en-US', {
        style: "currency", 
        currency: "USD"
    })

    return dollarFormatUS.format(number)
}