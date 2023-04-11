function handler(event) {
var
pastry_name_arr = [
"apple_pie",
"apple_pie_slice",
"chocolate_chip_cupcake",
"strawberry_cupcake",
"blueberry_jelly_doughnut",
"plain_bagel"
],
random_int = Math.floor(Math.random() * (pastry_name_arr.length)),
response = event.response,
date = new Date(),
attr_str = "",
distro_str = "d1kjx29mzcio04"; //change this
date.setTime(+ date + (365 * 86400000)); //24 \* 60 \* 60 \* 100
attr_str = "Secure; Path=/; Domain=" + distro_str + ".cloudfront.net; Expires=" + date +
";";
response.cookies = {
"the_image": {
"value": pastry_name_arr[random_int],
"attributes": attr_str
}
};
return response;
}