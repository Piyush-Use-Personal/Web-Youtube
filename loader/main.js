var manufacturerName = 'Dimention'; // H5 column
var itemType = 'UEM maintainance'; // U5 column
var mfrPartNumber = 'PWR'; //i5 column
function getLoB(manufacturerName, itemType, mfrPartNumber){
  switch (manufacturerName) {
    case 'Dimention':
      return 'SVC';

    case 'F5 Networks':
      if(itemType == 'OEM Maintainance')
        return 'SVC';
      return VLOOKUP_LOB(mfrPartNumber, 'A');

    case 'CISCO':
      return VLOOKUP_LOB(mfrPartNumber, 'A');

    default:
      return VLOOKUP_LOB(manufacturerName, 'K');

  }
}

CALCULATE(
  DISTINCTCOUNT(Presales_Child_Cases[Parent Case ID]),
  FILTER(
      Presales_Child_Cases,
      Presales_Child_Cases[Parent Status] in {"Fully Completed","Partial Completed"}
  )
)


/*

313 - 61 = 252
313 -> 61 -> 252=> 202 + 27
fully completed + partial completed = 229
In Progress - 33
Pending Info
Pending Presales
Pending Sales Admin
Pending Subcase Completion
Rejected - 0

total - 262
total - rejected = 262
total - in progress = 229 = fully completed + partial completed 



202 + 33 = 235

2
total = 313
common = gssc + country - Distinct(parent) = 27 - 10 = 17
comingOut = 202 = parentCases(fully completed + partial completed) - common
preSales = 61
missing = total - preSales - comingOut = 50 - common(gssc + country - Distinct(parent, [!fully completed , !partial completed]) = 10)

missing = (parentCases(in progress) = 33 ) + 17 ??


_tcv_new_cases

total = 313
comingOut = 219
preSales = 61
in progress = 33 




*/




