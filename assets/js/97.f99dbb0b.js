(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{395:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"helpers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helpers"}},[t._v("#")]),t._v(" Helpers")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#core-helpers"}},[t._v("Core Helpers")]),e("ul",[e("li",[e("a",{attrs:{href:"#get-the-lists-of-timezone"}},[t._v("Get the lists of timezone")])]),e("li",[e("a",{attrs:{href:"#get-the-list-of-available-locals"}},[t._v("Get the list of available locals")])]),e("li",[e("a",{attrs:{href:"#get-the-list-of-countries"}},[t._v("Get the list of countries")])]),e("li",[e("a",{attrs:{href:"#get-the-country-name"}},[t._v("Get the country name")])]),e("li",[e("a",{attrs:{href:"#get-the-available-states-associated-with-country-code"}},[t._v("Get the available states associated with country code")])]),e("li",[e("a",{attrs:{href:"#get-the-specified-state-name-associated-with-state-code"}},[t._v("Get the specified state name associated with state code")])]),e("li",[e("a",{attrs:{href:"#get-the-grouped-the-states-by-the-countries"}},[t._v("Get the Grouped the states by the countries")])]),e("li",[e("a",{attrs:{href:"#create-singleton-object-through-single-facade"}},[t._v("Create singleton object through single facade")])]),e("li",[e("a",{attrs:{href:"#format-date"}},[t._v("Format Date")])]),e("li",[e("a",{attrs:{href:"#return-currency-symbol-from-currency-code"}},[t._v("Return currency symbol from currency code")])]),e("li",[e("a",{attrs:{href:"#format-base-price"}},[t._v("Format base price")])]),e("li",[e("a",{attrs:{href:"#get-the-config-field"}},[t._v("Get the config field")])]),e("li",[e("a",{attrs:{href:"#get-the-config-data"}},[t._v("Get the config data")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Krayin provides a range of helper methods in its packages to streamline and simplify the development process. These helpers are designed to offer utility functions that facilitate common tasks, reducing the amount of boilerplate code developers need to write and enhancing overall productivity.")]),t._v(" "),e("h2",{attrs:{id:"core-helpers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-helpers"}},[t._v("#")]),t._v(" Core Helpers")]),t._v(" "),e("p",[t._v("The core helper methods are part of the Core class in the "),e("code",[t._v("Webkul\\Core")]),t._v(" namespace. These methods provide essential functionality that can be utilized across different parts of the application, making development more efficient and consistent. Let's explore some common methods:")]),t._v(" "),e("h3",{attrs:{id:"get-the-lists-of-timezone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-lists-of-timezone"}},[t._v("#")]),t._v(" Get the lists of timezone")]),t._v(" "),e("p",[t._v("To retrieve a list of timezones in the CRM, you can use the "),e("code",[t._v("core()->timezones()")]),t._v(" method, which returns the list of timezones.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timezones")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-list-of-available-locals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-list-of-available-locals"}},[t._v("#")]),t._v(" Get the list of available locals")]),t._v(" "),e("p",[t._v("To retrieve a list of available local in the CRM, you can use the "),e("code",[t._v("core()->locales()")]),t._v(" method, which return the list of available locales")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("locales")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-list-of-countries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-list-of-countries"}},[t._v("#")]),t._v(" Get the list of countries")]),t._v(" "),e("p",[t._v("To retrieve a list of countries in the CRM, you can use the "),e("code",[t._v("core()->countries()")]),t._v(" method, which returns the list of all countries within the CRM.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("countries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-country-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-country-name"}},[t._v("#")]),t._v(" Get the country name")]),t._v(" "),e("p",[t._v("To retrieve the country name by its country code, you can use the "),e("code",[t._v("core()->country_name($code)")]),t._v(" method, which returns the name of the country associated with the specified country code.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("country_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-available-states-associated-with-country-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-available-states-associated-with-country-code"}},[t._v("#")]),t._v(" Get the available states associated with country code")]),t._v(" "),e("p",[t._v("To retrieve a list of states associated with states in the CRM, you can use the "),e("code",[t._v("core()->states($countryCode)")]),t._v(" method, which returns the all states associated with the country code.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("states")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$countryCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-specified-state-name-associated-with-state-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-specified-state-name-associated-with-state-code"}},[t._v("#")]),t._v(" Get the specified state name associated with state code")]),t._v(" "),e("p",[t._v("To retrieve the state name by its state code, you can use the "),e("code",[t._v("core()->state_name($code)")]),t._v(" method, which returns the name of the state name associated with the specified state code.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("state_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-grouped-the-states-by-the-countries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-grouped-the-states-by-the-countries"}},[t._v("#")]),t._v(" Get the Grouped the states by the countries")]),t._v(" "),e("p",[t._v("To retrieve the grouped the states by the countries, you can use the "),e("code",[t._v("core()->findStateByCountryCode($countryCode, $stateCode)")]),t._v(" which takes two argument "),e("code",[t._v("$countryCode")]),t._v(" and "),e("code",[t._v("$stateCode")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findStateByCountryCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$countryCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stateCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"create-singleton-object-through-single-facade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-singleton-object-through-single-facade"}},[t._v("#")]),t._v(" Create singleton object through single facade")]),t._v(" "),e("p",[t._v("You can use the core method for singleton binding through the core helper methods.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingletonInstance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$className")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"format-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#format-date"}},[t._v("#")]),t._v(" Format Date")]),t._v(" "),e("p",[t._v("You can use "),e("code",[t._v("core()->formatDate($date, $format = 'd M Y h:iA')")]),t._v(" method to format the provided date, you can modify the format date structure by passing second argument.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("formatDate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$format")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"return-currency-symbol-from-currency-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-currency-symbol-from-currency-code"}},[t._v("#")]),t._v(" Return currency symbol from currency code")]),t._v(" "),e("p",[t._v("To get the symbol of current currency int the crm you can use the method of core helper")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("currencySymbol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"format-base-price"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#format-base-price"}},[t._v("#")]),t._v(" Format base price")]),t._v(" "),e("p",[t._v("To format the price of provided price you can use the method "),e("code",[t._v("core()->formatBasePrice()")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("formatBasePrice")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$price")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-config-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-config-field"}},[t._v("#")]),t._v(" Get the config field")]),t._v(" "),e("p",[t._v("To get the config field you can use the "),e("code",[t._v("core()->getConfigField($fieldName)")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfigField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fieldName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-the-config-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-config-data"}},[t._v("#")]),t._v(" Get the config data")]),t._v(" "),e("p",[t._v("To retrieve the config data you can use the method "),e("code",[t._v("core()->getConfigData($field)")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfigData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("These core helper methods provide various functionalities to simplify common tasks and streamline development in Krayin.")])])}),[],!1,null,null,null);e.default=n.exports}}]);