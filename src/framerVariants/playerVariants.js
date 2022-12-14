const playerPageVariant = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const playerCardVariant = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { delay: 0.5 },
	},
	exit: {
		opacity: 0,
	},
};

export { playerPageVariant, playerCardVariant };
