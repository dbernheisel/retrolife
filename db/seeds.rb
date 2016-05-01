# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


[
  {
    name:'Atari',
    founded_on: '6/27/1972',
    disbanded_on: '1/21/2013'
  },
  {
    name: 'Sega',
    founded_on: '6/3/1960',
    disbanded_on: nil
  },
  {
    name: 'Nintendo',
    founded_on: '9/23/1889',
    disbanded_on: nil
  },
  {
    name: 'NEC',
    founded_on: '7/17/1899',
    disbanded_on: nil
  },
  {
    name: 'Philips',
    founded_on: '5/15/1891',
    disbanded_on: nil
  },
  {
    name: 'SNK',
    founded_on: '7/22/1978',
    disbanded_on: nil
  },
  {
    name: 'Panasonic',
    founded_on: '3/13/1918',
    disbanded_on: nil
  },
  {
    name: 'Sony',
    founded_on: '5/7/1946',
    disbanded_on: nil
  },
  {
    name: 'Microsoft',
    founded_on: '4/4/1975',
    disbanded_on: nil
  }
].each do |publisher|
  Publisher.find_or_create_by(
    name: publisher[:name],
    founded_on: publisher[:founded_on],
    disbanded_on: publisher[:disbanded_on]
  )
end


platforms = [
  {
    name: 'Atari 7800',
    released_on: '5/1/1984',
    retired_on: '7/1/1992',
    publisher: 'Atari'
  },
  {
    name: 'Sega Master System',
    released_on: '7/15/1983',
    retired_on: '1/1/1991',
    publisher: 'Sega'
  },
  {
    name: 'NES / Famicom',
    released_on: '7/15/1983',
    retired_on: '8/14/1995',
    publisher: 'Nintendo'
  },
  {
    name: 'Sega Genesis / Mega Drive',
    released_on: '10/29/1988',
    retired_on: '4/1/1997',
    publisher: 'Sega'
  },
  {
    name: 'Sega CD / Mega CD',
    released_on: '12/12/1991',
    retired_on: '1/1/1996',
    publisher: 'Sega'
  },
  {
    name: 'Sega 32X',
    released_on: '11/21/1994',
    retired_on: '1/1/1996',
    publisher: 'Sega'
  },
  {
    name: 'PC Engine / TurboGrafx-16',
    released_on: '10/30/1987',
    retired_on: '12/16/1994',
    publisher: 'NEC'
  },
  {
    name: 'SuperGrafx',
    released_on: '12/8/1989',
    retired_on: '12/1/1990',
    publisher: 'NEC'
  },
  {
    name: 'Neo-Geo',
    released_on: '4/26/1990',
    retired_on: '1/1/1997',
    publisher: 'SNK'
  },
  {
    name: 'Neo-Geo CD',
    released_on: '9/1/1994',
    retired_on: '1/1/1997',
    publisher: 'SNK'
  },
  {
    name: 'Super NES / Super Famicom',
    released_on: '11/21/1990',
    retired_on: '9/25/2003',
    publisher: 'Nintendo'
  },
  {
    name: 'Satellaview',
    released_on: '4/23/1995',
    retired_on: '6/30/2000',
    publisher: 'Nintendo'
  },
  {
    name: 'CD-i',
    released_on: '12/3/1991',
    retired_on: '1/1/1998',
    publisher: 'Philips'
  },
  {
    name: 'TurboDuo / PC Engine Duo',
    released_on: '9/21/1991',
    retired_on: '12/1/1995',
    publisher: 'NEC'
  },
  {
    name: 'PC-FX',
    released_on: '12/23/1994',
    retired_on: '2/1//1998',
    publisher: 'NEC'
  },
  {
    name: 'Atari Jaguar',
    released_on: '11/15/1993',
    retired_on: '1/1/1996',
    publisher: 'Atari'
  },
  {
    name: 'Atari Jaguar CD',
    released_on: '9/21/1995',
    retired_on: '1/1/1996',
    publisher: 'Atari'
  },
  {
    name: 'PlayStation',
    released_on: '12/3/1994',
    retired_on: '3/31/2005',
    publisher: 'Sony'
  },
  {
    name: 'Sega Saturn',
    released_on: '11/22/1994',
    retired_on: '1/1/2000',
    publisher: 'Sega'
  },
  {
    name: '3DO',
    released_on: '10/4/1993',
    retired_on: '12/1/1996',
    publisher: 'Panasonic'
  },
  {
    name: 'Nintendo 64',
    released_on: '6/23/1996',
    retired_on: '11/30/2003',
    publisher: 'Nintendo'
  },
  {
    name: 'Nintendo 64DD',
    released_on: '12/1/1999',
    retired_on: '2/28/2001',
    publisher: 'Nintendo'
  },
  {
    name: 'Dreamcast',
    released_on: '11/27/1998',
    retired_on: '3/31/2001',
    publisher: 'Sega'
  },
  {
    name: 'PlayStation 2',
    released_on: '3/4/2000',
    retired_on: '12/28/2012',
    publisher: 'Sony'
  },
  {
    name: 'GameCube',
    released_on: '9/14/2001',
    retired_on: '2/1/2007',
    publisher: 'Nintendo'
  },
  {
    name: 'Xbox',
    released_on: '11/15/2001',
    retired_on: '3/2/2009',
    publisher: 'Microsoft'
  },
  {
    name: 'Wii',
    released_on: '11/19/2006',
    retired_on: '10/20/2013',
    publisher: 'Nintendo'
  }
].each do |platform|
  Platform.find_or_create_by(
    name: platform[:name],
    released_on: platform[:released_on],
    retired_on: platform[:retired_on],
    publisher: Publisher.find_by(name: platform[:publisher])
  )
end
