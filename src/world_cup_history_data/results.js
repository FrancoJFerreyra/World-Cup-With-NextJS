const data = [
	{
		year: 1930,
		hostCountry: 'Uruguay',
		winner: 'Uruguay',
		winnerResult: 4,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png',
		runnerUp: 'Argentina',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png',
		topGoalScorer: [
			{
				name: 'Guillermo Stábile',
				nickname: 'El Filtrador',
				dateOfBirth: '17/01/1905',
				dateOfDeath: '26/12/1966',
				country: 'Argentina',
				numberOfGoals: 8,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Stabile_hurac_1926.jpg/220px-Stabile_hurac_1926.jpg',
				biography: 'https://en.wikipedia.org/wiki/Guillermo_St%C3%A1bile',
				description:
					'Guillermo Stábile was an Argentine professional football player and manager who played as a centre forward. At club level, Stábile won two national championships with Huracán and played in Italy and France. He was the top scorer of 1930 World Cup, the inaugural iteration of the tournament. As manager, he led Argentina to victory at six South American Championships and Racing Club to three league titles.​',
			},
		],
		totalAttendance: 590549,
		numberOfMatches: 18,
	},
	{
		year: 1934,
		hostCountry: 'Italy',
		winner: 'Italy',
		winnerResult: 2,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png?20111003040337',
		runnerUp: 'Czechoslovakia',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/125px-Flag_of_the_Czech_Republic.svg.png',
		topGoalScorer: [
			{
				name: 'Oldřich Nejedlý',
				nickname: null,
				dateOfBirth: '26/12/1909',
				dateOfDeath: '11/06/1990',
				country: 'Czechoslovakia',
				numberOfGoals: 5,
				image: 'https://artedofutebol.files.wordpress.com/2010/04/oldrich-nejedly-1934.jpg',
				biography: 'https://en.wikipedia.org/wiki/Old%C5%99ich_Nejedl%C3%BD',
				description: `Oldřich Nejedlý was a Czech footballer, who spent his entire professional career at Sparta Prague as an inside-forward. He is considered to be one of Czechoslovakia's greatest players of all time. He was the top goalscorer of the 1934 World Cup.`,
			},
		],
		totalAttendance: 363000,
		numberOfMatches: 17,
	},
	{
		year: 1938,
		hostCountry: 'France',
		winner: 'Italy',
		winnerResult: 4,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png?20111003040337',
		runnerUp: 'Hungary',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Civil_Ensign_of_Hungary.svg/125px-Civil_Ensign_of_Hungary.svg.png',
		topGoalScorer: [
			{
				name: 'Leonidas da Silva',
				nickname: 'La Perla Negra, El Diamante Negro, El Hombre de Goma.',
				dateOfBirth: '06/09/1913',
				dateOfDeath: '24/01/2004',
				country: 'Brazil',
				numberOfGoals: 7,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Leonidas_dasilva.jpg/200px-Leonidas_dasilva.jpg',
				biography: 'https://en.wikipedia.org/wiki/Le%C3%B4nidas_da_Silva',
				description:
					'Leônidas da Silva was a Brazilian professional footballer who played as a forward. He is regarded as one of the most important players of the first half of the 20th century. Leônidas played for Brazil national team in the 1934 and 1938 World Cups, and was the top scorer of the latter tournament. He was known as the "Black Diamond" and the "Rubber Man" due to his agility.',
			},
		],
		totalAttendance: 375000,
		numberOfMatches: 18,
	},
	{
		year: 1950,
		hostCountry: 'Brazil',
		winner: 'Uruguay',
		winnerResult: 2,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png',
		runnerUp: 'Brazil',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		topGoalScorer: [
			{
				name: 'Ademir Marques de Menezes',
				nickname: 'Queixada',
				dateOfBirth: '08/11/1921',
				dateOfDeath: '11/05/1996',
				country: 'Brazil',
				numberOfGoals: 8,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ademir_de_Menezes.jpg/300px-Ademir_de_Menezes.jpg',
				biography: 'https://en.wikipedia.org/wiki/Ademir_Marques_de_Menezes',
				description: `Ademir Marques de Menezes was a Brazilian footballer, regarded as one of the best forwards in football history. His prominent underbite earned him the nickname "Queixada", which means "jaw". He was also the top goalscorer in the 1950 FIFA World Cup.`,
			},
		],
		totalAttendance: 1045246,
		numberOfMatches: 22,
	},
	{
		year: 1954,
		hostCountry: 'Switzerland',
		winner: 'West Germany',
		winnerResult: 3,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		runnerUp: 'Hungary',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Civil_Ensign_of_Hungary.svg/125px-Civil_Ensign_of_Hungary.svg.png',
		topGoalScorer: [
			{
				name: 'Sándor Kocsis',
				nickname: 'Cabeza de oro',
				dateOfBirth: '21/09/1929',
				dateOfDeath: '22/07/1979',
				country: 'Hungary',
				numberOfGoals: 11,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/S%C3%A1ndor_Kocsis.jpg/250px-S%C3%A1ndor_Kocsis.jpg',
				biography: 'https://en.wikipedia.org/wiki/S%C3%A1ndor_Kocsis',
				description:
					'Sándor Péter Kocsis was a Hungarian footballer who played for Ferencváros TC, Budapest Honvéd, Young Fellows Zürich, FC Barcelona and Hungary as a striker. During the 1950s, along with Ferenc Puskás, Zoltán Czibor, József Bozsik and Nándor Hidegkuti, he was a member of the Mighty Magyars. After the 1956 Hungarian Revolution, he moved to Spain where he became a member of the FC Barcelona team of the late 1950s.',
			},
		],
		totalAttendance: 768607,
		numberOfMatches: 26,
	},
	{
		year: 1958,
		hostCountry: 'Sweden',
		winner: 'Brazil',
		winnerResult: 5,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		runnerUp: 'Sweden',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/125px-Flag_of_Sweden.svg.png',
		topGoalScorer: [
			{
				name: 'Just Fontaine',
				nickname: 'Pesadilla',
				dateOfBirth: '18/08/1933 (89 años)',
				dateOfDeath: null,
				country: 'France',
				numberOfGoals: 13,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Just_Fontaine_en_1958.jpg/245px-Just_Fontaine_en_1958.jpg',
				biography: 'https://en.wikipedia.org/wiki/Just_Fontaine',
				description:
					'Just Louis Fontaine is a French former professional footballer. A prolific forward, he is best known for scoring the most goals in a single edition of the FIFA World Cup, with thirteen in six matches in 1958. In 2004, Pelé named him one of the 125 Greatest Living Footballers at a FIFA Awards Ceremony.',
			},
		],
		totalAttendance: 819810,
		numberOfMatches: 35,
	},
	{
		year: 1962,
		hostCountry: 'Chile',
		winner: 'Brazil',
		winnerResult: 3,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		runnerUp: 'Czechoslovakia',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/125px-Flag_of_the_Czech_Republic.svg.png',
		topGoalScorer: [
			{
				name: 'Manuel Francisco Dos Santos',
				nickname: 'Mané, Garrincha, la Alegría del Pueblo, el Ángel de las Piernas Torcidas',
				dateOfBirth: '28/10/1933',
				dateOfDeath: '20/01/1983',
				country: 'Brazil',
				numberOfGoals: 4,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MFdSantos-Garrincha.jpg/245px-MFdSantos-Garrincha.jpg',
				biography: 'https://en.wikipedia.org/wiki/Garrincha',
				description:
					'Manuel Francisco dos Santos, nicknamed Mané Garrincha, best known as simply Garrincha (Portuguese pronunciation: [ɡaˈʁĩʃɐ], "little bird"), was a Brazilian professional footballer who played as a right winger. He is widely regarded as one of the greatest players of all time, and by some, the greatest dribbler ever.',
			},
			{
				name: 'Edvaldo Izidio Neto',
				nickname: 'Vavá',
				dateOfBirth: '12/11/1934',
				dateOfDeath: '19/01/2002',
				country: 'Brazil',
				numberOfGoals: 4,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Vav%C3%A1_en_1962.jpg/245px-Vav%C3%A1_en_1962.jpg',
				biography: 'https://en.wikipedia.org/wiki/Vav%C3%A1',
				description:
					'Edvaldo Izidio Neto, commonly known as Vavá, was a Brazilian footballer who is widely considered one of the best strikers of his generation. His nickname was "Peito de Aço" (Steel Chest). He played as a main striker (or centre forward) for Sport Club do Recife, C.R. Vasco da Gama, S.E. Palmeiras and the Brazil national football team.',
			},
			{
				name: 'Leonel Sánchez',
				nickname: 'León, Leonello, El Gran Leonel, Don',
				dateOfBirth: '25/04/1936',
				dateOfDeath: '02/04/2022',
				country: 'Chile',
				numberOfGoals: 4,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Leonel_S%C3%A1nchez_%282%29.jpg/220px-Leonel_S%C3%A1nchez_%282%29.jpg',
				biography: 'https://en.wikipedia.org/wiki/Leonel_S%C3%A1nchez',
				description:
					'He is recognized as one of the Best South American Footballers of the 20th Century and one of the great forwards in the history of the FIFA World Cup. He was goalscorer of the 1962 FIFA World Cup where Chile achieved a historic third place in the largest global event for national teams, was part of the ideal eleven of the World Cup and was awarded the Golden Boot and the Bronze Ball from FIFA. He was also included in the top 100 players of the history of the World Cups by FIFA. At the continental level he was part of the ideal eleven of the América Cup 1956, where together with the Chile national team he won a runner-up. In addition Conmebol included him among the best specialists of free kicks in the history of South America.',
			},
			{
				name: 'Flórián Albert',
				nickname: 'El emperador',
				dateOfBirth: '15/09/1941',
				dateOfDeath: '31/10/2011',
				country: 'Hungary',
				numberOfGoals: 4,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fl%C3%B3ri%C3%A1n_Albert_cropped.jpg/245px-Fl%C3%B3ri%C3%A1n_Albert_cropped.jpg',
				biography: 'https://en.wikipedia.org/wiki/Fl%C3%B3ri%C3%A1n_Albert',
				description:
					'Flórián Albert was a Hungarian professional football player, manager and sports official, who was named European Footballer of the Year in 1967. Nicknamed "The Emperor", he played as a forward, and has been described as one of the most elegant footballers of all time.',
			},
			{
				name: 'Valentin Ivanov',
				nickname: 'Bailarina',
				dateOfBirth: '19/11/1934',
				dateOfDeath: '08/11/2011',
				country: 'Soviet Union',
				numberOfGoals: 4,
				image: 'https://s.hs-data.com/bilder/spieler/gross/18569.jpg',
				biography: 'https://en.wikipedia.org/wiki/Valentin_Ivanov_(footballer,_born_1934)',
				description: `Valentin Kozmich Ivanov was a Russian footballer who played as a midfielder. He was the co-leading scorer at the 1962 World Cup, and the co-1960 European Nations' Cup top scorer.`,
			},
			{
				name: 'Dražan Jerković',
				nickname: 'Draža',
				dateOfBirth: '06/08/1936',
				dateOfDeath: '09/12/2008',
				country: 'Yugoslavia',
				numberOfGoals: 4,
				image:
					'https://upload.wikimedia.org/wikipedia/hr/thumb/d/db/Jerkovic.JPG/150px-Jerkovic.JPG',
				biography: 'https://en.wikipedia.org/wiki/Dra%C5%BEan_Jerkovi%C4%87',
				description:
					'Dražan Jerković was a Yugoslav and Croatian professional football manager and player. His professional playing career spanned from 1954 to 1966, during which he played for Dinamo Zagreb and AA La Gantoise.',
			},
		],
		totalAttendance: 893172,
		numberOfMatches: 32,
	},
	{
		year: 1966,
		hostCountry: 'England',
		winner: 'England',
		winnerResult: 4,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/125px-Flag_of_England.svg.png',
		runnerUp: 'West Germany',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		topGoalScorer: [
			{
				name: 'Eusébio da Silva Ferreira',
				nickname: 'La Perla Negra, La Pantera Negra, La Pantera de Mozambique',
				dateOfBirth: '25/01/1942',
				dateOfDeath: '05/01/2014',
				country: 'Portugal',
				numberOfGoals: 9,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Eusebio_Portugal2.JPG/245px-Eusebio_Portugal2.JPG',
				biography: 'https://en.wikipedia.org/wiki/Eus%C3%A9bio',
				description: `Eusébio da Silva Ferreira GCIH GCM, nicknamed the "Black Panther", the "Black Pearl" or "O Rei" ("The King"), was a Portuguese footballer who played as a striker. He is considered one of the greatest players of all time and Benfica's greatest player ever. He was known for his speed, technique, athleticism and his ferocious right-footed shot, making him a prolific goalscorer, in which he scored 733 goals in 745 matches.`,
			},
		],
		totalAttendance: 1563135,
		numberOfMatches: 32,
	},
	{
		year: 1970,
		hostCountry: 'Mexico',
		winner: 'Brazil',
		winnerResult: 4,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		runnerUp: 'Italy',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png?20111003040337',
		topGoalScorer: [
			{
				name: 'Gerhard Müller',
				nickname: 'El Bombardero de la Nacion, Torpedo Muller',
				dateOfBirth: '03/11/1945',
				dateOfDeath: '15/08/2021',
				country: 'West Germany',
				numberOfGoals: 10,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gerd_M%C3%BCller_c1973.jpg/245px-Gerd_M%C3%BCller_c1973.jpg',
				biography: 'https://en.wikipedia.org/wiki/Gerd_M%C3%BCller',
				description:
					'Gerhard "Gerd" Müller was a German professional footballer. A striker renowned for his clinical finishing, especially in and around the six-yard box, he is widely regarded as one of the greatest goalscorers in the history of the sport.',
			},
		],
		totalAttendance: 1603975,
		numberOfMatches: 32,
	},
	{
		year: 1974,
		hostCountry: 'West Germany',
		winner: 'West Germany',
		winnerResult: 2,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		runnerUp: 'Netherlands',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png',
		topGoalScorer: [
			{
				name: 'Grzegorz Lato',
				nickname: 'El Pelado, El más Veloz de los Veloces',
				dateOfBirth: '08/04/1950',
				dateOfDeath: null,
				country: 'Poland',
				numberOfGoals: 7,
				image: 'https://s.hs-data.com/bilder/spieler/gross/13144.jpg?fallback=png',
				biography: 'https://en.wikipedia.org/wiki/Grzegorz_Lato',
				description: `Grzegorz Bolesław Lato is a Polish former professional football player and manager who played as a winger. He was a member of Poland's golden generation of football players who rose to fame in the 1970s and early 80s. Over a decade, he represented Poland at five major tournaments starting with gold at the 1972 Summer Olympic Games in Munich and ending with a third-place finish at the 1982 FIFA World Cup in Spain. He reached the peak of his career at the 1974 World Cup, where he was the leading scorer and the only Pole to-date to have won the honor. After retiring from his playing career he had a brief stint as manager in several clubs in and out of Poland.`,
			},
		],
		totalAttendance: 1865753,
		numberOfMatches: 38,
	},
	{
		year: 1978,
		hostCountry: 'Argentina',
		winner: 'Argentina',
		winnerResult: 3,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png',
		runnerUp: 'Netherlands',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png',
		topGoalScorer: [
			{
				name: 'Mario Kempes',
				nickname: 'El Matador',
				dateOfBirth: '15/07/1954',
				dateOfDeath: null,
				country: 'Argentina',
				numberOfGoals: 6,
				image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Kempes_Valencia_CF.jpg',
				biography: 'https://en.wikipedia.org/wiki/Mario_Alberto_Kempes',
				description: `Mario Alberto Kempes Chiodi is an Argentine former professional footballer who played as a striker or attacking midfielder. His father, Mario, also a footballer, inspired him to play from a young age. At the age of seven he began playing with a junior team and at fourteen, he joined the Talleres reserves. A prolific goalscorer, at club level he is best known for playing for Valencia, finishing as La Liga's top goalscorer twice, and amassing 116 goals in 184 league games for the club.`,
			},
		],
		totalAttendance: 1545791,
		numberOfMatches: 38,
	},
	{
		year: 1982,
		hostCountry: 'Spain',
		winner: 'Italy',
		winnerResult: 3,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png?20111003040337',
		runnerUp: 'West Germany',
		runnerUpResult: 1,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		topGoalScorer: [
			{
				name: 'Paolo Rossi',
				nickname: 'Pablito, Bambino d’Oro',
				dateOfBirth: '23/06/1954',
				dateOfDeath: '09/12/2020',
				country: 'Italy',
				numberOfGoals: 6,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Paolo_Rossi_Vicenza_%28cropped%29.jpg/245px-Paolo_Rossi_Vicenza_%28cropped%29.jpg',
				biography: 'https://en.wikipedia.org/wiki/Paolo_Rossi',
				description: `Paolo Rossi was an Italian professional footballer who played as a forward. He led Italy to the 1982 FIFA World Cup title, scoring six goals to win the Golden Boot as top goalscorer, and the Golden Ball for the player of the tournament. Rossi is one of only three players, and the only European, to have won all three awards at a World Cup, along with Garrincha in 1962, and Mario Kempes in 1978. Rossi was also awarded the 1982 Ballon d'Or as the European Footballer of the Year for his performances (remaining the only player in history to win these four awards in a single year). Along with Roberto Baggio and Christian Vieri, he is Italy's top scorer in World Cup history, with nine goals overall.`,
			},
		],
		totalAttendance: 2109723,
		numberOfMatches: 52,
	},
	{
		year: 1986,
		hostCountry: 'Mexico',
		winner: 'Argentina',
		winnerResult: 3,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png',
		runnerUp: 'West Germany',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		topGoalScorer: [
			{
				name: 'Gary Lineker',
				nickname: 'Garygol',
				dateOfBirth: '30/11/1960',
				dateOfDeath: null,
				country: 'England',
				numberOfGoals: 6,
				image:
					'https://images.mediotiempo.com/13-ETWcNyeXW1EWoNCkTMn6ATV0=/958x596/uploads/media/2016/05/13/gary-lineker.jpg',
				biography: 'https://en.wikipedia.org/wiki/Gary_Lineker',
				description: `Gary Winston Lineker OBE is an English former professional footballer and current sports broadcaster. He is regarded as one of the greatest English strikers. His media career began with the BBC, where he has presented the flagship football programme Match of the Day since the late 1990s, the longest tenure of any MOTD presenter. Lineker is also the BBC's lead presenter for live football matches, including its coverage of international tournaments like the FIFA World Cup. He has also previously worked for Al Jazeera Sports, Eredivisie Live, NBC Sports Network, and BT Sport's coverage of the UEFA Champions League.`,
			},
		],
		totalAttendance: 239403,
		numberOfMatches: 52,
	},
	{
		year: 1990,
		hostCountry: 'Italy',
		winner: 'West Germany',
		winnerResult: 1,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		runnerUp: 'Argentina',
		runnerUpResult: 0,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png',
		topGoalScorer: [
			{
				name: 'Salvatore Schillaci',
				nickname: 'Totó, El Salvador de la Patria',
				dateOfBirth: '01/12/1964',
				dateOfDeath: null,
				country: 'Italy',
				numberOfGoals: 6,
				image: 'https://s.hs-data.com/bilder/spieler/gross/7087.jpg?fallback=png',
				biography: 'https://en.wikipedia.org/wiki/Salvatore_Schillaci',
				description:
					'Salvatore Schillaci Cavaliere OMRI, commonly referred to by his nickname Totò, is an Italian former footballer, who played as a striker. During his club career, he played for Messina (1982–1989), Juventus (1989–1992), Internazionale (1992–1994) and Júbilo Iwata (1994–1997).',
			},
		],
		totalAttendance: 2516215,
		numberOfMatches: 52,
	},
	{
		year: 1994,
		hostCountry: 'United States',
		winner: 'Brazil',
		winnerResult: '0 (3 Penalties)',
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		runnerUp: 'Italy',
		runnerUpResult: '0 (2 Penalties)',
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png?20111003040337',
		topGoalScorer: [
			{
				name: 'Oleg Salenko',
				nickname: 'El Buitre Ruso',
				dateOfBirth: '25/10/1969',
				dateOfDeath: null,
				country: 'Russia',
				numberOfGoals: 6,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Salenko_O_2012.JPG/245px-Salenko_O_2012.JPG',
				biography: 'https://en.wikipedia.org/wiki/Oleg_Salenko',
				description:
					'Oleg Anatolyevich Salenko is a retired Russian-Ukrainian footballer who played as a forward. He scored a record five goals in a group-stage match in the 1994 World Cup, helping him earn the Golden Boot as joint-top tournament goalscorer.',
			},
			{
				name: 'Hristo Stoichkov',
				nickname: 'El Pistolero',
				dateOfBirth: '08/02/1966',
				dateOfDeath: null,
				country: 'Bulgaria',
				numberOfGoals: 6,
				image: 'https://m.footballdatabase.eu/images/photos/players/1994/a_6/6112.jpg',
				biography: 'https://en.wikipedia.org/wiki/Hristo_Stoichkov',
				description: `Hristo Stoichkov Stoichkov is a Bulgarian former professional footballer who is a football commentator for TUDN. A prolific forward, he is regarded as one of the best players of his generation and is regarded as the greatest Bulgarian footballer of all time. He was runner-up for the FIFA World Player of the Year award in 1992 and 1994, and received the Ballon d'Or in 1994. In 2004, Stoichkov was named by Pelé in the FIFA 100 list of the world's greatest living players.`,
			},
		],
		totalAttendance: 3587538,
		numberOfMatches: 52,
	},
	{
		year: 1998,
		hostCountry: 'France',
		winner: 'France',
		winnerResult: 3,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
		runnerUp: 'Brazil',
		runnerUpResult: 0,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		topGoalScorer: [
			{
				name: 'Davor Šuker',
				nickname: 'Šukerman, Mago de Osijek, Davor Šoccer, El mago',
				dateOfBirth: '01/01/1968',
				dateOfDeath: null,
				country: 'Croatia',
				numberOfGoals: 6,
				image: 'https://s.hs-data.com/bilder/spieler/gross/1.jpg?fallback=png',
				biography: 'https://en.wikipedia.org/wiki/Davor_%C5%A0uker',
				description: `Davor Šuker is a Croatian former professional footballer and president of the Croatian Football Federation from 2012 to 2021. During his playing career, Šuker featured as a striker. He began his footballing career in his hometown for local first division team NK Osijek as a 16-year-old. During his final season with the club, he became the league's top goal scorer. He made the move to sign for Dinamo Zagreb in 1989. The Croatian War of Independence halted a promising season for the 21-year-old, eventually resulting in Šuker's move to Spanish club Sevilla in 1991.`,
			},
		],
		totalAttendance: 2785100,
		numberOfMatches: 64,
	},
	{
		year: 2002,
		hostCountry: 'South Korea,Japan',
		winner: 'Brazil',
		winnerResult: 2,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png',
		runnerUp: 'Germany',
		runnerUpResult: 0,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		topGoalScorer: [
			{
				name: 'Ronaldo',
				nickname: 'O fenômeno',
				dateOfBirth: '18/09/1976',
				dateOfDeath: null,
				country: 'Brazil',
				numberOfGoals: 8,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ronaldo_Cannes.jpg/220px-Ronaldo_Cannes.jpg',
				biography: 'https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)',
				description: `Ronaldo Luís Nazário de Lima, commonly known as Ronaldo or Ronaldo Nazário, is a Brazilian business owner and president of La Liga club Real Valladolid, owner of Brasileiro Série A club Cruzeiro, and a former professional footballer who played as a striker. Nicknamed O Fenômeno ('The Phenomenon') and R9, he is widely considered one of the greatest players of all time. As a multi-functional striker who brought a new dimension to the position, Ronaldo has been an influence for a generation of strikers that have followed. His individual accolades include being named FIFA World Player of the Year three times and winning two Ballon d'Or awards.`,
			},
		],
		totalAttendance: 2705197,
		numberOfMatches: 64,
	},
	{
		year: 2006,
		hostCountry: 'Germany',
		winner: 'Italy',
		winnerResult: '1 (5 Penalties)',
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png?20111003040337',
		runnerUp: 'France',
		runnerUpResult: '1 (3 Penalties)',
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
		topGoalScorer: [
			{
				name: 'Miroslav Klose',
				nickname: 'El Bombardero Aleman',
				dateOfBirth: '09/06/1978',
				dateOfDeath: null,
				country: 'Germany',
				numberOfGoals: 5,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Miroslav_Klose_2014.jpg/220px-Miroslav_Klose_2014.jpg',
				biography: 'https://en.wikipedia.org/wiki/Miroslav_Klose',
				description:
					'Miroslav Josef Klose is a German professional football manager and former player who is the head coach of Austrian Bundesliga club Rheindorf Altach. A striker, Klose is the all-time top scorer for Germany and holds the record for the most goals scored in FIFA World Cups.',
			},
		],
		totalAttendance: 3359439,
		numberOfMatches: 64,
	},
	{
		year: 2010,
		hostCountry: 'South Africa',
		winner: 'Spain',
		winnerResult: 1,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png',
		runnerUp: 'Netherlands',
		runnerUpResult: 0,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png',
		topGoalScorer: [
			{
				name: 'Diego Forlán',
				nickname: 'Cachavacha',
				dateOfBirth: '19/05/1979',
				dateOfDeath: null,
				country: 'Uruguay',
				numberOfGoals: 5,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/U10_Diego_Forl%C3%A1n_7524.jpg/220px-U10_Diego_Forl%C3%A1n_7524.jpg',
				biography: 'https://en.wikipedia.org/wiki/Diego_Forl%C3%A1n',
				description: `Diego Forlán Corazo is a Uruguayan professional football manager and former player who played as a forward. Regarded as one of the best forwards of his generation, Forlán is a two-time winner of both the Pichichi Trophy and the European Golden Shoe at club level. With the Uruguay national team, he had huge individual success at the 2010 World Cup, finishing as joint top scorer with five goals, including the goal of the tournament, and winning the Golden Ball as the tournament's best player.`,
			},
			{
				name: 'Thomas Müller',
				nickname: 'Radio',
				dateOfBirth: '13/09/1989',
				dateOfDeath: null,
				country: 'Germany',
				numberOfGoals: 5,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thomas_M%C3%BCller_2022_%28cropped%29.jpg/220px-Thomas_M%C3%BCller_2022_%28cropped%29.jpg',
				biography: 'https://en.wikipedia.org/wiki/Thomas_M%C3%BCller',
				description:
					'Thomas Müller is a German professional footballer who plays for Bundesliga club Bayern Munich and the Germany national team. A versatile player, Müller has been deployed in a variety of attacking roles – as an attacking midfielder, second striker, centre forward, and on either wing. Müller has been praised for his positioning, teamwork, stamina, and work-rate, and has shown consistency in both scoring and creating goals. He is regarded as one of the best off-the-ball players of all time due to his positional awareness. Müller holds the record for the most assists given in the Bundesliga, with 152.',
			},
			{
				name: 'Wesley Sneijder',
				nickname: 'Sneijdertje, Sniper',
				dateOfBirth: '09/06/1984',
				dateOfDeath: null,
				country: 'Netherlands',
				numberOfGoals: 5,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Wesley_Sneijder_%2815487233555%29_%28cropped%29.jpg/225px-Wesley_Sneijder_%2815487233555%29_%28cropped%29.jpg',
				biography: 'https://en.wikipedia.org/wiki/Wesley_Sneijder',
				description:
					'Wesley Sneijder is a Dutch retired professional footballer. Due to his elite playmaking ability, Sneijder was considered one of the best midfielders in the world during his prime',
			},
			{
				name: 'David Villa',
				nickname: 'El Guaje',
				dateOfBirth: '03/12/1981',
				dateOfDeath: null,
				country: 'Spain',
				numberOfGoals: 5,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Spain-Tahiti%2C_Confederations_Cup_2013_%2802%29_%28Villa_crop%29.jpg/245px-Spain-Tahiti%2C_Confederations_Cup_2013_%2802%29_%28Villa_crop%29.jpg',
				biography: 'https://en.wikipedia.org/wiki/David_Villa',
				description:
					'David Villa Sánchez is a Spanish retired professional footballer who played as a striker. Villa is regarded by pundits as one of the best forwards of his generation, and one of the best Spanish strikers of all time.',
			},
		],
		totalAttendance: 3178856,
		numberOfMatches: 64,
	},
	{
		year: 2014,
		hostCountry: 'Brazil',
		winner: 'Germany',
		winnerResult: 1,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
		runnerUp: 'Argentina',
		runnerUpResult: 0,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png',
		topGoalScorer: [
			{
				name: 'James Rodríguez',
				nickname: 'El Bandido, JR10',
				dateOfBirth: '12/07/1991',
				dateOfDeath: null,
				country: 'Colombia',
				numberOfGoals: 6,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/James_Rodriguez_2018.jpg/220px-James_Rodriguez_2018.jpg',
				biography: 'https://en.wikipedia.org/wiki/James_Rodr%C3%ADguez',
				description:
					'James David Rodríguez Rubio is a Colombian professional footballer who plays as an attacking midfielder or a winger for Super League Greece club Olympiacos and the Colombia national team. He has been praised in the past for his technique, vision and playmaking skills, and was often considered the successor to his compatriot Carlos Valderrama.',
			},
		],
		totalAttendance: 3429873,
		numberOfMatches: 64,
	},
	{
		year: 2018,
		hostCountry: 'Russia',
		winner: 'France',
		winnerResult: 4,
		winnerFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
		runnerUp: 'Croatia',
		runnerUpResult: 2,
		runnerUpFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png',
		topGoalScorer: [
			{
				name: 'Harry Kane',
				nickname: 'Hurrikane, Huracán, Ciudadano Kane',
				dateOfBirth: '28/07/1993',
				dateOfDeath: null,
				country: 'England',
				numberOfGoals: 6,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Harry_Kane_in_Russia_2.jpg/245px-Harry_Kane_in_Russia_2.jpg',
				biography: 'https://en.wikipedia.org/wiki/Harry_Kane',
				description: `Harry Edward Kane MBE is an English professional footballer who plays as a striker for Premier League club Tottenham Hotspur and captains the England national team. A prolific goalscorer with strong link play, Kane is regarded as one of the best strikers in the world and is Tottenham's second-highest all-time top goalscorer, England's second-highest all-time top goalscorer, and the third-highest Premier League all-time top goalscorer.`,
			},
		],
		totalAttendance: 3031768,
		numberOfMatches: 64,
	},
];

export default data;
