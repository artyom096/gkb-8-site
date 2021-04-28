import classes from './Questions.module.scss';
import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

export const Questions: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Вопросы и ответы</h4>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle className={classes.button} as={Card.Header} eventKey="0">
						Скажите, платное ли у Вас стационарное лечение для детей, проживающих в РФ?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							По Российскому законодательству застрахованные граждане РФ при наличии медицинских показаний
							имеют право на лечение и обследование в любом медицинском учреждении РФ бесплатно.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle className={classes.button} as={Card.Header} eventKey="1">
						Что необходимо, чтобы попасть на лечение с ребёнком в Вашу клинику?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							Для граждан РФ необходимо направление в нашу больницу врача-специалиста (невролога) с места
							постоянного проживания ребенка и соответствующие анализы.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle className={classes.button} as={Card.Header} eventKey="2">
						Какого уровня специалисты консультируют в Вашей клинике?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							Врачи высшей квалификационной категории, кандидаты медицинских наук (КМН), доценты,
							ассистенты кафедры КГМА, заведующий кафедрой детской неврологии КГМА.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle className={classes.button} as={Card.Header} eventKey="3">
						При каких условиях можно пройти бесплатное обследование в вашем учреждении амбулаторным
						пациентам?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
							При наличии квоты на бесплатное обследование, выданной в районной детской поликлинике. Квоты
							распределяет администрация детской поликлиники по месту прикрепления ребенка.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle className={classes.button} as={Card.Header} eventKey="4">
						Есть ли возможность амбулаторного платного обследования?
					</Accordion.Toggle>
					<Accordion.Collapse className={classes.button} eventKey="4">
						<Card.Body>
							Да, больница имеет разрешение на платные услуги. Платное обследование проводится ежедневно с
							12.00 до 16.00 в рабочие дни (кроме субботы, воскресенья и праздников). Платные консультации
							невролога проводятся по предварительной записи по телефону 273-45-79.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle className={classes.button} as={Card.Header} eventKey="5">
						Принимаете ли Вы на обследование взрослое население?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="5">
						<Card.Body>Принимаем на платной основе без ограничения по возрасту.</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};
