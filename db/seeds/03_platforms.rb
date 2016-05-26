module Seeds
  def self.seed_platforms
    manufacturer_role = Role.find_by(name: 'Manufacturer')
    [
      { name: 'Atari 7800',                released_on: Date.new(1984, 1, 5),   retired_on: Date.new(1992, 7, 1),   company: 'Atari, Inc.' },
      { name: 'Sega Master System',        released_on: Date.new(1983, 7, 15),  retired_on: Date.new(1991, 1, 1),   company: 'Sega' },
      { name: 'NES / Famicom',             released_on: Date.new(1983, 7, 15),  retired_on: Date.new(1995, 8, 14),  company: 'Nintendo' },
      { name: 'Sega Genesis / Mega Drive', released_on: Date.new(1988, 10, 29), retired_on: Date.new(1997, 4, 1),   company: 'Sega' },
      { name: 'Sega CD / Mega CD',         released_on: Date.new(1991, 12, 12), retired_on: Date.new(1996, 1, 1),   company: 'Sega' },
      { name: 'Sega 32X',                  released_on: Date.new(1994, 11, 21), retired_on: Date.new(1996, 1, 1),   company: 'Sega' },
      { name: 'PC Engine / TurboGrafx-16', released_on: Date.new(1987, 10, 30), retired_on: Date.new(1994, 12, 16), company: 'NEC' },
      { name: 'SuperGrafx',                released_on: Date.new(1989, 12, 8),  retired_on: Date.new(1990, 12, 1),  company: 'NEC' },
      { name: 'Neo-Geo',                   released_on: Date.new(1990, 4, 26),  retired_on: Date.new(1997, 1, 1),   company: 'SNK' },
      { name: 'Neo-Geo CD',                released_on: Date.new(1994, 9, 1),   retired_on: Date.new(1997, 1, 1),   company: 'SNK' },
      { name: 'Super NES / Super Famicom', released_on: Date.new(1990, 11, 21), retired_on: Date.new(2003, 9, 25),  company: 'Nintendo' },
      { name: 'Satellaview',               released_on: Date.new(1995, 4, 23),  retired_on: Date.new(2000, 6, 30),  company: 'Nintendo' },
      { name: 'CD-i',                      released_on: Date.new(1991, 12, 3),  retired_on: Date.new(1998, 1, 1),   company: 'Philips' },
      { name: 'TurboDuo / PC Engine Duo',  released_on: Date.new(1991, 9, 21),  retired_on: Date.new(1995, 12, 1),  company: 'NEC' },
      { name: 'PC-FX',                     released_on: Date.new(1994, 12, 23), retired_on: Date.new(1998, 2, 1),   company: 'NEC' },
      { name: 'Atari Jaguar',              released_on: Date.new(1993, 11, 15), retired_on: Date.new(1996, 1, 1),   company: 'Atari, Inc.' },
      { name: 'Atari Jaguar CD',           released_on: Date.new(1995, 9, 21),  retired_on: Date.new(1996, 1, 1),   company: 'Atari, Inc.' },
      { name: 'PlayStation',               released_on: Date.new(1994, 12, 3),  retired_on: Date.new(2005, 3, 31),  company: 'Sony Computer Entertainment' },
      { name: 'Sega Saturn',               released_on: Date.new(1994, 11, 22), retired_on: Date.new(2000, 1, 1),   company: 'Sega' },
      { name: '3DO',                       released_on: Date.new(1993, 10, 4),  retired_on: Date.new(1996, 12, 1),  company: 'Panasonic' },
      { name: 'Nintendo 64',               released_on: Date.new(1996, 6, 23),  retired_on: Date.new(2003, 11, 30), company: 'Nintendo' },
      { name: 'Nintendo 64DD',             released_on: Date.new(1999, 12, 1),  retired_on: Date.new(2001, 2, 28),  company: 'Nintendo' },
      { name: 'Dreamcast',                 released_on: Date.new(1998, 11, 27), retired_on: Date.new(2001, 3, 31),  company: 'Sega' },
      { name: 'PlayStation 2',             released_on: Date.new(2000, 3, 4),   retired_on: Date.new(2012, 12, 28), company: 'Sony Computer Entertainment' },
      { name: 'GameCube',                  released_on: Date.new(2001, 9, 14),  retired_on: Date.new(2007, 2, 1),   company: 'Nintendo' },
      { name: 'Xbox',                      released_on: Date.new(2001, 11, 15), retired_on: Date.new(2009, 3, 2),   company: 'Microsoft Corporation' },
      { name: 'Wii',                       released_on: Date.new(2006, 11, 19), retired_on: Date.new(2013, 10, 20), company: 'Nintendo' }
    ].each do |platform|
      company_obj = Company.find_by(name: platform[:company])

      Platform.create_with(
        released_on: platform[:released_on],
        retired_on: platform[:retired_on],
        company: company_obj
      ).find_or_create_by(
        name: platform[:name],
      )

      CompanyRole.find_or_create_by(
        company: company_obj,
        role: manufacturer_role
      )
    end
  end
end
