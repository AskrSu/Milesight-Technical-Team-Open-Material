# How to Disable Module of Gateway?

1. ssh root in
2. `urtool --use` to activate urtool
3. `urtool -g` to check chip info
4. `urtool -s -xxx` to set chip
   1. P -- Mainboard PN
   2. H -- Mainboard Version
   3. S -- Mainboard SN
   4. E -- Mainboard OEM Version
   5. C -- Mainboard ODM Version
   6. X -- Sonboard SN
   7. Y -- Sonboard Version
   8. R -- Reserved
5. ex:  `urtool -s -XL04AU0000000`
   1. -X for Sonboard
   2. L04AU for activate LTE module
   3. 00 for disable WIFI module
   4. 00000 for reserved
6. Use Password, contact us to have.

