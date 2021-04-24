import classes from './Education.module.scss';
import React from 'react';

export const Education: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Кафедра детской неврологии</h4>
			<div className={classes.title}>
				<img src="https://kgma.info/images/vsya_kafedra.jpg" alt="Кафедра" />
				<p>
					Больница является базой кафедры детской неврологии Казанской медицинской академии последипломного
					образования. Заведующий кафедрой – доктор медицинских наук, профессор Прусаков В.Ф.
				</p>
			</div>
		</div>
	);
};
