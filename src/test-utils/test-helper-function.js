export const pause = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
};
