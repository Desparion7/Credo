import styles from './loading-spinner.module.css';

const LoadingSpinner = () => {
	return (
		<div className={styles.loaderBox}>
			<span className={styles.loader} />
		</div>
	);
};

export default LoadingSpinner;
