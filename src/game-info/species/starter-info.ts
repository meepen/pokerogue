import { PokemonVariety as Species } from "#pokeapi";

export const speciesStarters = new Map<Species, number>([
  [ Species.Bulbasaur, 3 ],
  [ Species.Charmander, 3 ],
  [ Species.Squirtle, 3 ],
  [ Species.Caterpie, 1 ],
  [ Species.Weedle, 1 ],
  [ Species.Pidgey, 2 ],
  [ Species.Rattata, 1 ],
  [ Species.Spearow, 2 ],
  [ Species.Ekans, 2 ],
  [ Species.Pikachu, 4 ],
  [ Species.Sandshrew, 2 ],
  [ Species.NidoranF, 3 ],
  [ Species.NidoranM, 3 ],
  [ Species.Clefairy, 4 ],
  [ Species.Vulpix, 3 ],
  [ Species.Jigglypuff, 4 ],
  [ Species.Zubat, 2 ],
  [ Species.Oddish, 2 ],
  [ Species.Paras, 1 ],
  [ Species.Venonat, 2 ],
  [ Species.Diglett, 3 ],
  [ Species.Meowth, 4 ],
  [ Species.Psyduck, 2 ],
  [ Species.Mankey, 4 ],
  [ Species.Growlithe, 4 ],
  [ Species.Poliwag, 3 ],
  [ Species.Abra, 3 ],
  [ Species.Machop, 3 ],
  [ Species.Bellsprout, 3 ],
  [ Species.Tentacool, 3 ],
  [ Species.Geodude, 3 ],
  [ Species.Ponyta, 3 ],
  [ Species.Slowpoke, 3 ],
  [ Species.Magnemite, 3 ],
  [ Species.Farfetchd, 4 ],
  [ Species.Doduo, 4 ],
  [ Species.Seel, 3 ],
  [ Species.Grimer, 3 ],
  [ Species.Shellder, 4 ],
  [ Species.Gastly, 3 ],
  [ Species.Onix, 4 ],
  [ Species.Drowzee, 3 ],
  [ Species.Krabby, 2 ],
  [ Species.Voltorb, 2 ],
  [ Species.Exeggcute, 4 ],
  [ Species.Cubone, 3 ],
  [ Species.Hitmonlee, 5 ],
  [ Species.Hitmonchan, 5 ],
  [ Species.Lickitung, 5 ],
  [ Species.Koffing, 3 ],
  [ Species.Rhyhorn, 3 ],
  [ Species.Chansey, 5 ],
  [ Species.Tangela, 3 ],
  [ Species.Kangaskhan, 5 ],
  [ Species.Horsea, 4 ],
  [ Species.Goldeen, 3 ],
  [ Species.Staryu, 4 ],
  [ Species.MrMime, 4 ],
  [ Species.Scyther, 5 ],
  [ Species.Jynx, 4 ],
  [ Species.Electabuzz, 5 ],
  [ Species.Magmar, 5 ],
  [ Species.Pinsir, 4 ],
  [ Species.Tauros, 5 ],
  [ Species.Magikarp, 3 ],
  [ Species.Lapras, 5 ],
  [ Species.Ditto, 2 ],
  [ Species.Eevee, 4 ],
  [ Species.Porygon, 4 ],
  [ Species.Omanyte, 3 ],
  [ Species.Kabuto, 3 ],
  [ Species.Aerodactyl, 5 ],
  [ Species.Snorlax, 5 ],
  [ Species.Articuno, 6 ],
  [ Species.Zapdos, 6 ],
  [ Species.Moltres, 6 ],
  [ Species.Dratini, 4 ],
  [ Species.Mewtwo, 8 ],
  [ Species.Mew, 7 ],

  [ Species.Chikorita, 3 ],
  [ Species.Cyndaquil, 3 ],
  [ Species.Totodile, 3 ],
  [ Species.Sentret, 1 ],
  [ Species.Hoothoot, 1 ],
  [ Species.Ledyba, 1 ],
  [ Species.Spinarak, 1 ],
  [ Species.Chinchou, 3 ],
  [ Species.Pichu, 3 ],
  [ Species.Cleffa, 3 ],
  [ Species.Igglybuff, 3 ],
  [ Species.Togepi, 3 ],
  [ Species.Natu, 2 ],
  [ Species.Mareep, 3 ],
  [ Species.Marill, 4 ],
  [ Species.Sudowoodo, 5 ],
  [ Species.Hoppip, 1 ],
  [ Species.Aipom, 3 ],
  [ Species.Sunkern, 1 ],
  [ Species.Yanma, 3 ],
  [ Species.Wooper, 2 ],
  [ Species.Murkrow, 4 ],
  [ Species.Misdreavus, 3 ],
  [ Species.Unown, 1 ],
  [ Species.Wobbuffet, 4 ],
  [ Species.Girafarig, 4 ],
  [ Species.Pineco, 2 ],
  [ Species.Dunsparce, 4 ],
  [ Species.Gligar, 4 ],
  [ Species.Snubbull, 3 ],
  [ Species.Qwilfish, 3 ],
  [ Species.Shuckle, 4 ],
  [ Species.Heracross, 5 ],
  [ Species.Sneasel, 4 ],
  [ Species.Teddiursa, 4 ],
  [ Species.Slugma, 2 ],
  [ Species.Swinub, 3 ],
  [ Species.Corsola, 3 ],
  [ Species.Remoraid, 3 ],
  [ Species.Delibird, 3 ],
  [ Species.Mantine, 4 ],
  [ Species.Skarmory, 5 ],
  [ Species.Houndour, 4 ],
  [ Species.Phanpy, 3 ],
  [ Species.Stantler, 4 ],
  [ Species.Smeargle, 3 ],
  [ Species.Tyrogue, 4 ],
  [ Species.Smoochum, 3 ],
  [ Species.Elekid, 4 ],
  [ Species.Magby, 4 ],
  [ Species.Miltank, 5 ],
  [ Species.Raikou, 6 ],
  [ Species.Entei, 6 ],
  [ Species.Suicune, 6 ],
  [ Species.Larvitar, 4 ],
  [ Species.Lugia, 8 ],
  [ Species.HoOh, 8 ],
  [ Species.Celebi, 7 ],

  [ Species.Treecko, 3 ],
  [ Species.Torchic, 3 ],
  [ Species.Mudkip, 3 ],
  [ Species.Poochyena, 2 ],
  [ Species.Zigzagoon, 2 ],
  [ Species.Wurmple, 1 ],
  [ Species.Lotad, 3 ],
  [ Species.Seedot, 3 ],
  [ Species.Taillow, 3 ],
  [ Species.Wingull, 3 ],
  [ Species.Ralts, 3 ],
  [ Species.Surskit, 2 ],
  [ Species.Shroomish, 3 ],
  [ Species.Slakoth, 4 ],
  [ Species.Nincada, 4 ],
  [ Species.Whismur, 3 ],
  [ Species.Makuhita, 3 ],
  [ Species.Azurill, 3 ],
  [ Species.Nosepass, 3 ],
  [ Species.Skitty, 3 ],
  [ Species.Sableye, 3 ],
  [ Species.Mawile, 5 ],
  [ Species.Aron, 3 ],
  [ Species.Meditite, 4 ],
  [ Species.Electrike, 3 ],
  [ Species.Plusle, 2 ],
  [ Species.Minun, 2 ],
  [ Species.Volbeat, 2 ],
  [ Species.Illumise, 2 ],
  [ Species.Roselia, 4 ],
  [ Species.Gulpin, 3 ],
  [ Species.Carvanha, 3 ],
  [ Species.Wailmer, 3 ],
  [ Species.Numel, 3 ],
  [ Species.Torkoal, 4 ],
  [ Species.Spoink, 3 ],
  [ Species.Spinda, 2 ],
  [ Species.Trapinch, 4 ],
  [ Species.Cacnea, 3 ],
  [ Species.Swablu, 3 ],
  [ Species.Zangoose, 5 ],
  [ Species.Seviper, 4 ],
  [ Species.Lunatone, 4 ],
  [ Species.Solrock, 4 ],
  [ Species.Barboach, 3 ],
  [ Species.Corphish, 3 ],
  [ Species.Baltoy, 3 ],
  [ Species.Lileep, 3 ],
  [ Species.Anorith, 3 ],
  [ Species.Feebas, 4 ],
  [ Species.Castform, 2 ],
  [ Species.Kecleon, 4 ],
  [ Species.Shuppet, 3 ],
  [ Species.Duskull, 3 ],
  [ Species.Tropius, 5 ],
  [ Species.Chimecho, 4 ],
  [ Species.Absol, 5 ],
  [ Species.Wynaut, 3 ],
  [ Species.Snorunt, 3 ],
  [ Species.Spheal, 3 ],
  [ Species.Clamperl, 3 ],
  [ Species.Relicanth, 4 ],
  [ Species.Luvdisc, 2 ],
  [ Species.Bagon, 4 ],
  [ Species.Beldum, 4 ],
  [ Species.Regirock, 6 ],
  [ Species.Regice, 6 ],
  [ Species.Registeel, 6 ],
  [ Species.Latias, 7 ],
  [ Species.Latios, 7 ],
  [ Species.Kyogre, 8 ],
  [ Species.Groudon, 8 ],
  [ Species.Rayquaza, 8 ],
  [ Species.Jirachi, 7 ],
  [ Species.DeoxysNormal, 8 ],

  [ Species.Turtwig, 3 ],
  [ Species.Chimchar, 3 ],
  [ Species.Piplup, 3 ],
  [ Species.Starly, 3 ],
  [ Species.Bidoof, 2 ],
  [ Species.Kricketot, 1 ],
  [ Species.Shinx, 3 ],
  [ Species.Budew, 3 ],
  [ Species.Cranidos, 3 ],
  [ Species.Shieldon, 3 ],
  [ Species.Burmy, 1 ],
  [ Species.Combee, 2 ],
  [ Species.Pachirisu, 3 ],
  [ Species.Buizel, 3 ],
  [ Species.Cherubi, 3 ],
  [ Species.Shellos, 3 ],
  [ Species.Drifloon, 3 ],
  [ Species.Buneary, 3 ],
  [ Species.Glameow, 3 ],
  [ Species.Chingling, 3 ],
  [ Species.Stunky, 3 ],
  [ Species.Bronzor, 3 ],
  [ Species.Bonsly, 4 ],
  [ Species.MimeJr, 3 ],
  [ Species.Happiny, 4 ],
  [ Species.Chatot, 4 ],
  [ Species.Spiritomb, 5 ],
  [ Species.Gible, 4 ],
  [ Species.Munchlax, 4 ],
  [ Species.Riolu, 4 ],
  [ Species.Hippopotas, 3 ],
  [ Species.Skorupi, 3 ],
  [ Species.Croagunk, 3 ],
  [ Species.Carnivine, 4 ],
  [ Species.Finneon, 3 ],
  [ Species.Mantyke, 3 ],
  [ Species.Snover, 3 ],
  [ Species.Rotom, 5 ],
  [ Species.Uxie, 7 ],
  [ Species.Mesprit, 7 ],
  [ Species.Azelf, 7 ],
  [ Species.Dialga, 8 ],
  [ Species.Palkia, 8 ],
  [ Species.Heatran, 7 ],
  [ Species.Regigigas, 8 ],
  [ Species.GiratinaAltered, 8 ],
  [ Species.Cresselia, 7 ],
  [ Species.Phione, 5 ],
  [ Species.Manaphy, 7 ],
  [ Species.Darkrai, 7 ],
  [ Species.ShayminLand, 7 ],
  [ Species.Arceus, 9 ],
  [ Species.Victini, 8 ],

  [ Species.Snivy, 3 ],
  [ Species.Tepig, 3 ],
  [ Species.Oshawott, 3 ],
  [ Species.Patrat, 2 ],
  [ Species.Lillipup, 3 ],
  [ Species.Purrloin, 3 ],
  [ Species.Pansage, 3 ],
  [ Species.Pansear, 3 ],
  [ Species.Panpour, 3 ],
  [ Species.Munna, 3 ],
  [ Species.Pidove, 2 ],
  [ Species.Blitzle, 3 ],
  [ Species.Roggenrola, 3 ],
  [ Species.Woobat, 3 ],
  [ Species.Drilbur, 4 ],
  [ Species.Audino, 4 ],
  [ Species.Timburr, 3 ],
  [ Species.Tympole, 3 ],
  [ Species.Throh, 5 ],
  [ Species.Sawk, 5 ],
  [ Species.Sewaddle, 3 ],
  [ Species.Venipede, 3 ],
  [ Species.Cottonee, 3 ],
  [ Species.Petilil, 3 ],
  [ Species.BasculinRedStriped, 4 ],
  [ Species.Sandile, 3 ],
  [ Species.Darumaka, 4 ],
  [ Species.Maractus, 4 ],
  [ Species.Dwebble, 3 ],
  [ Species.Scraggy, 3 ],
  [ Species.Sigilyph, 5 ],
  [ Species.Yamask, 3 ],
  [ Species.Tirtouga, 4 ],
  [ Species.Archen, 4 ],
  [ Species.Trubbish, 3 ],
  [ Species.Zorua, 3 ],
  [ Species.Minccino, 3 ],
  [ Species.Gothita, 3 ],
  [ Species.Solosis, 3 ],
  [ Species.Ducklett, 3 ],
  [ Species.Vanillite, 3 ],
  [ Species.Deerling, 3 ],
  [ Species.Emolga, 3 ],
  [ Species.Karrablast, 3 ],
  [ Species.Foongus, 3 ],
  [ Species.Frillish, 3 ],
  [ Species.Alomomola, 4 ],
  [ Species.Joltik, 3 ],
  [ Species.Ferroseed, 3 ],
  [ Species.Klink, 3 ],
  [ Species.Tynamo, 3 ],
  [ Species.Elgyem, 3 ],
  [ Species.Litwick, 3 ],
  [ Species.Axew, 4 ],
  [ Species.Cubchoo, 3 ],
  [ Species.Cryogonal, 5 ],
  [ Species.Shelmet, 3 ],
  [ Species.Stunfisk, 4 ],
  [ Species.Mienfoo, 3 ],
  [ Species.Druddigon, 5 ],
  [ Species.Golett, 3 ],
  [ Species.Pawniard, 4 ],
  [ Species.Bouffalant, 5 ],
  [ Species.Rufflet, 3 ],
  [ Species.Vullaby, 3 ],
  [ Species.Heatmor, 5 ],
  [ Species.Durant, 5 ],
  [ Species.Deino, 4 ],
  [ Species.Larvesta, 4 ],
  [ Species.Cobalion, 6 ],
  [ Species.Terrakion, 6 ],
  [ Species.Virizion, 6 ],
  [ Species.TornadusIncarnate, 7 ],
  [ Species.ThundurusIncarnate, 7 ],
  [ Species.Reshiram, 8 ],
  [ Species.Zekrom, 8 ],
  [ Species.LandorusIncarnate, 7 ],
  [ Species.Kyurem, 8 ],
  [ Species.KeldeoOrdinary, 7 ],
  [ Species.MeloettaAria, 7 ],
  [ Species.Genesect, 8 ],

  [ Species.Chespin, 3 ],
  [ Species.Fennekin, 3 ],
  [ Species.Froakie, 3 ],
  [ Species.Bunnelby, 2 ],
  [ Species.Fletchling, 3 ],
  [ Species.Scatterbug, 1 ],
  [ Species.Litleo, 3 ],
  [ Species.Flabebe, 3 ],
  [ Species.Skiddo, 3 ],
  [ Species.Pancham, 3 ],
  [ Species.Furfrou, 4 ],
  [ Species.Espurr, 3 ],
  [ Species.Honedge, 4 ],
  [ Species.Spritzee, 3 ],
  [ Species.Swirlix, 3 ],
  [ Species.Inkay, 3 ],
  [ Species.Binacle, 3 ],
  [ Species.Skrelp, 3 ],
  [ Species.Clauncher, 3 ],
  [ Species.Helioptile, 3 ],
  [ Species.Tyrunt, 3 ],
  [ Species.Amaura, 3 ],
  [ Species.Hawlucha, 4 ],
  [ Species.Dedenne, 4 ],
  [ Species.Carbink, 4 ],
  [ Species.Goomy, 4 ],
  [ Species.Klefki, 4 ],
  [ Species.Phantump, 3 ],
  [ Species.PumpkabooAverage, 3 ],
  [ Species.Bergmite, 3 ],
  [ Species.Noibat, 4 ],
  [ Species.Xerneas, 8 ],
  [ Species.Yveltal, 8 ],
  [ Species.Zygarde50, 8 ],
  [ Species.Diancie, 7 ],
  [ Species.Hoopa, 7 ],
  [ Species.Volcanion, 7 ],
  [ Species.FloetteEternal, 5 ],

  [ Species.Rowlet, 3 ],
  [ Species.Litten, 3 ],
  [ Species.Popplio, 3 ],
  [ Species.Pikipek, 3 ],
  [ Species.Yungoos, 2 ],
  [ Species.Grubbin, 2 ],
  [ Species.Crabrawler, 4 ],
  [ Species.OricorioBaile, 3 ],
  [ Species.Cutiefly, 3 ],
  [ Species.Rockruff, 3 ],
  [ Species.WishiwashiSolo, 3 ],
  [ Species.Mareanie, 3 ],
  [ Species.Mudbray, 3 ],
  [ Species.Dewpider, 3 ],
  [ Species.Fomantis, 3 ],
  [ Species.Morelull, 3 ],
  [ Species.Salandit, 3 ],
  [ Species.Stufful, 3 ],
  [ Species.Bounsweet, 3 ],
  [ Species.Comfey, 4 ],
  [ Species.Oranguru, 5 ],
  [ Species.Passimian, 5 ],
  [ Species.Wimpod, 3 ],
  [ Species.Sandygast, 3 ],
  [ Species.Pyukumuku, 3 ],
  [ Species.TypeNull, 6 ],
  [ Species.MiniorRedMeteor, 5 ],
  [ Species.Komala, 5 ],
  [ Species.Turtonator, 5 ],
  [ Species.Togedemaru, 4 ],
  [ Species.MimikyuDisguised, 5 ],
  [ Species.Bruxish, 5 ],
  [ Species.Drampa, 5 ],
  [ Species.Dhelmise, 5 ],
  [ Species.JangmoO, 4 ],
  [ Species.TapuKoko, 6 ],
  [ Species.TapuLele, 6 ],
  [ Species.TapuBulu, 6 ],
  [ Species.TapuFini, 6 ],
  [ Species.Cosmog, 7 ],
  [ Species.Nihilego, 7 ],
  [ Species.Buzzwole, 7 ],
  [ Species.Pheromosa, 7 ],
  [ Species.Xurkitree, 7 ],
  [ Species.Celesteela, 7 ],
  [ Species.Kartana, 7 ],
  [ Species.Guzzlord, 7 ],
  [ Species.Necrozma, 8 ],
  [ Species.Magearna, 7 ],
  [ Species.Marshadow, 7 ],
  [ Species.Poipole, 7 ],
  [ Species.Stakataka, 7 ],
  [ Species.Blacephalon, 7 ],
  [ Species.Zeraora, 7 ],
  [ Species.Meltan, 6 ],
  [ Species.RattataAlola, 2 ],
  [ Species.SandshrewAlola, 4 ],
  [ Species.VulpixAlola, 4 ],
  [ Species.DiglettAlola, 3 ],
  [ Species.MeowthAlola, 4 ],
  [ Species.GeodudeAlola, 3 ],
  [ Species.GrimerAlola, 3 ],

  [ Species.Grookey, 3 ],
  [ Species.Scorbunny, 3 ],
  [ Species.Sobble, 3 ],
  [ Species.Skwovet, 2 ],
  [ Species.Rookidee, 4 ],
  [ Species.Blipbug, 2 ],
  [ Species.Nickit, 3 ],
  [ Species.Gossifleur, 3 ],
  [ Species.Wooloo, 3 ],
  [ Species.Chewtle, 3 ],
  [ Species.Yamper, 3 ],
  [ Species.Rolycoly, 3 ],
  [ Species.Applin, 4 ],
  [ Species.Silicobra, 3 ],
  [ Species.Cramorant, 3 ],
  [ Species.Arrokuda, 3 ],
  [ Species.Toxel, 3 ],
  [ Species.Sizzlipede, 3 ],
  [ Species.Clobbopus, 3 ],
  [ Species.Sinistea, 3 ],
  [ Species.Hatenna, 4 ],
  [ Species.Impidimp, 3 ],
  [ Species.Milcery, 3 ],
  [ Species.Falinks, 4 ],
  [ Species.Pincurchin, 3 ],
  [ Species.Snom, 3 ],
  [ Species.Stonjourner, 4 ],
  [ Species.EiscueIce, 4 ],
  [ Species.IndeedeeMale, 3 ],
  [ Species.MorpekoFullBelly, 3 ],
  [ Species.Cufant, 4 ],
  [ Species.Dracozolt, 5 ],
  [ Species.Arctozolt, 5 ],
  [ Species.Dracovish, 5 ],
  [ Species.Arctovish, 5 ],
  [ Species.Duraludon, 5 ],
  [ Species.Dreepy, 4 ],
  [ Species.Zacian, 8 ],
  [ Species.Zamazenta, 8 ],
  [ Species.Eternatus, 10 ],
  [ Species.Kubfu, 7 ],
  [ Species.Zarude, 7 ],
  [ Species.Regieleki, 6 ],
  [ Species.Regidrago, 6 ],
  [ Species.Glastrier, 7 ],
  [ Species.Spectrier, 7 ],
  [ Species.Calyrex, 8 ],
  [ Species.MeowthGalar, 4 ],
  [ Species.PonytaGalar, 4 ],
  [ Species.SlowpokeGalar, 3 ],
  [ Species.FarfetchdGalar, 5 ],
  [ Species.CorsolaGalar, 4 ],
  [ Species.ZigzagoonGalar, 3 ],
  [ Species.DarumakaGalar, 4 ],
  [ Species.YamaskGalar, 3 ],
  [ Species.StunfiskGalar, 4 ],
  [ Species.MrMimeGalar, 5 ],
  [ Species.ArticunoGalar, 6 ],
  [ Species.ZapdosGalar, 6 ],
  [ Species.MoltresGalar, 6 ],
  [ Species.GrowlitheHisui, 4 ],
  [ Species.VoltorbHisui, 3 ],
  [ Species.QwilfishHisui, 4 ],
  [ Species.SneaselHisui, 4 ],
  [ Species.ZoruaHisui, 4 ],
  [ Species.EnamorusIncarnate, 7 ],

  [ Species.Sprigatito, 3 ],
  [ Species.Fuecoco, 3 ],
  [ Species.Quaxly, 3 ],
  [ Species.Lechonk, 2 ],
  [ Species.Tarountula, 2 ],
  [ Species.Nymble, 2 ],
  [ Species.Pawmi, 3 ],
  [ Species.Tandemaus, 4 ],
  [ Species.Fidough, 3 ],
  [ Species.Smoliv, 3 ],
  [ Species.Squawkabilly, 3 ],
  [ Species.Nacli, 4 ],
  [ Species.Charcadet, 4 ],
  [ Species.Tadbulb, 3 ],
  [ Species.Wattrel, 3 ],
  [ Species.Maschiff, 3 ],
  [ Species.Shroodle, 3 ],
  [ Species.Bramblin, 3 ],
  [ Species.Toedscool, 3 ],
  [ Species.Klawf, 4 ],
  [ Species.Capsakid, 3 ],
  [ Species.Rellor, 3 ],
  [ Species.Flittle, 3 ],
  [ Species.Tinkatink, 4 ],
  [ Species.Wiglett, 3 ],
  [ Species.Bombirdier, 3 ],
  [ Species.Finizen, 4 ],
  [ Species.Varoom, 4 ],
  [ Species.Cyclizar, 5 ],
  [ Species.Orthworm, 4 ],
  [ Species.Glimmet, 4 ],
  [ Species.Greavard, 4 ],
  [ Species.Flamigo, 3 ],
  [ Species.Cetoddle, 4 ],
  [ Species.Veluza, 4 ],
  [ Species.Dondozo, 5 ],
  [ Species.Tatsugiri, 5 ],
  [ Species.GreatTusk, 6 ],
  [ Species.ScreamTail, 6 ],
  [ Species.BruteBonnet, 6 ],
  [ Species.FlutterMane, 6 ],
  [ Species.SlitherWing, 6 ],
  [ Species.SandyShocks, 6 ],
  [ Species.IronTreads, 6 ],
  [ Species.IronBundle, 6 ],
  [ Species.IronHands, 6 ],
  [ Species.IronJugulis, 6 ],
  [ Species.IronMoth, 6 ],
  [ Species.IronThorns, 6 ],
  [ Species.Frigibax, 4 ],
  [ Species.Gimmighoul, 5 ],
  [ Species.WoChien, 7 ],
  [ Species.ChienPao, 7 ],
  [ Species.TingLu, 7 ],
  [ Species.ChiYu, 7 ],
  [ Species.RoaringMoon, 6 ],
  [ Species.IronValiant, 6 ],
  [ Species.Koraidon, 8 ],
  [ Species.Miraidon, 8 ],
  [ Species.WalkingWake, 7 ],
  [ Species.IronLeaves, 7 ],
  [ Species.Poltchageist, 4 ],
  [ Species.Okidogi, 7 ],
  [ Species.Munkidori, 7 ],
  [ Species.Fezandipiti, 7 ],
  [ Species.Ogerpon, 8 ],
  [ Species.GougingFire, 7 ],
  [ Species.RagingBolt, 7 ],
  [ Species.IronBoulder, 7 ],
  [ Species.IronCrown, 7 ],
  [ Species.Terapagos, 8 ],
  [ Species.Pecharunt, 7 ],
  [ Species.TaurosPaldeaCombatBreed, 5 ],
  [ Species.WooperPaldea, 3 ],
  [ Species.UrsalunaBloodmoon, 7 ],
]);