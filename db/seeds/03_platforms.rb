module Seeds
  def self.seed_platforms
    [
      { name: 'Atari 7800',                released_on: '5/1/1984',   retired_on: '7/1/1992',   company: 'Atari, Inc.' },
      { name: 'Sega Master System',        released_on: '7/15/1983',  retired_on: '1/1/1991',   company: 'Sega' },
      { name: 'NES / Famicom',             released_on: '7/15/1983',  retired_on: '8/14/1995',  company: 'Nintendo' },
      { name: 'Sega Genesis / Mega Drive', released_on: '10/29/1988', retired_on: '4/1/1997',   company: 'Sega' },
      { name: 'Sega CD / Mega CD',         released_on: '12/12/1991', retired_on: '1/1/1996',   company: 'Sega' },
      { name: 'Sega 32X',                  released_on: '11/21/1994', retired_on: '1/1/1996',   company: 'Sega' },
      { name: 'PC Engine / TurboGrafx-16', released_on: '10/30/1987', retired_on: '12/16/1994', company: 'NEC' },
      { name: 'SuperGrafx',                released_on: '12/8/1989',  retired_on: '12/1/1990',  company: 'NEC' },
      { name: 'Neo-Geo',                   released_on: '4/26/1990',  retired_on: '1/1/1997',   company: 'SNK' },
      { name: 'Neo-Geo CD',                released_on: '9/1/1994',   retired_on: '1/1/1997',   company: 'SNK' },
      { name: 'Super NES / Super Famicom', released_on: '11/21/1990', retired_on: '9/25/2003',  company: 'Nintendo' },
      { name: 'Satellaview',               released_on: '4/23/1995',  retired_on: '6/30/2000',  company: 'Nintendo' },
      { name: 'CD-i',                      released_on: '12/3/1991',  retired_on: '1/1/1998',   company: 'Philips' },
      { name: 'TurboDuo / PC Engine Duo',  released_on: '9/21/1991',  retired_on: '12/1/1995',  company: 'NEC' },
      { name: 'PC-FX',                     released_on: '12/23/1994', retired_on: '2/1//1998',  company: 'NEC' },
      { name: 'Atari Jaguar',              released_on: '11/15/1993', retired_on: '1/1/1996',   company: 'Atari, Inc.' },
      { name: 'Atari Jaguar CD',           released_on: '9/21/1995',  retired_on: '1/1/1996',   company: 'Atari, Inc.' },
      { name: 'PlayStation',               released_on: '12/3/1994',  retired_on: '3/31/2005',  company: 'Sony Computer Entertainment' },
      { name: 'Sega Saturn',               released_on: '11/22/1994', retired_on: '1/1/2000',   company: 'Sega' },
      { name: '3DO',                       released_on: '10/4/1993',  retired_on: '12/1/1996',  company: 'Panasonic' },
      { name: 'Nintendo 64',               released_on: '6/23/1996',  retired_on: '11/30/2003', company: 'Nintendo' },
      { name: 'Nintendo 64DD',             released_on: '12/1/1999',  retired_on: '2/28/2001',  company: 'Nintendo' },
      { name: 'Dreamcast',                 released_on: '11/27/1998', retired_on: '3/31/2001',  company: 'Sega' },
      { name: 'PlayStation 2',             released_on: '3/4/2000',   retired_on: '12/28/2012', company: 'Sony Computer Entertainment' },
      { name: 'GameCube',                  released_on: '9/14/2001',  retired_on: '2/1/2007',   company: 'Nintendo' },
      { name: 'Xbox',                      released_on: '11/15/2001', retired_on: '3/2/2009',   company: 'Microsoft Corporation' },
      { name: 'Wii',                       released_on: '11/19/2006', retired_on: '10/20/2013', company: 'Nintendo' }
    ].each do |platform|
      company_obj = Company.find_by(name: platform[:company])
      obj = Platform.find_or_create_by(
        name: platform[:name],
        released_on: platform[:released_on],
        retired_on: platform[:retired_on],
        company: company_obj
      )

      CompanyRole.create(
        company: company_obj,
        role: Role.find_by(name: 'Manufacturer')
      )
    end
  end
end
