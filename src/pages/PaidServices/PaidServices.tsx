import classes from './PaidServices.module.scss';
import React from 'react';
import { Accordion, Button, Card, Table } from 'react-bootstrap';

export const PaidServices: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Платные услуги</h4>
			<Accordion defaultActiveKey="0">
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="0">
							Кабинет функциониональной диагностики
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Электроэнцефалография (ЭЭГ)</td>
										<td>1000</td>
									</tr>
									<tr>
										<td>Эхоэнцефалография (Эхо-ЭГ)</td>
										<td>500</td>
									</tr>
									<tr>
										<td>Регистрация вызванных патенциалов</td>
										<td>1000</td>
									</tr>
									<tr>
										<td>Электромиография накожная</td>
										<td>1000</td>
									</tr>
									<tr>
										<td>Электромиография стимуляционная</td>
										<td>500</td>
									</tr>
									<tr>
										<td>Электродиагностика</td>
										<td>1200</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="1">
							Кабинет УЗИ
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Ультразвуковая доплерография артерий (УЗДГ-сосудов шеи)</td>
										<td>900</td>
									</tr>
									<tr>
										<td>Дуплексное сканирование брахиоцефальных артерий (УЗДГ-сосудов головы)</td>
										<td>900</td>
									</tr>
									<tr>
										<td>Нейросонография</td>
										<td>700</td>
									</tr>
									<tr>
										<td>Ультразвуковое исследование печени</td>
										<td>200</td>
									</tr>
									<tr>
										<td>Ультразвуковое исследование желчного пузыря</td>
										<td>200</td>
									</tr>
									<tr>
										<td>Ультразвуковое исследование почек</td>
										<td>400</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="2">
							Консультации врачей
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Прием врача-педиатра</td>
										<td>1000</td>
									</tr>
									<tr>
										<td>Прием врача-невролога</td>
										<td>2500</td>
									</tr>
									<tr>
										<td>Прием медицинского психолога</td>
										<td>2000</td>
									</tr>
									<tr>
										<td>Консультация логопеда</td>
										<td>1200</td>
									</tr>
									<tr>
										<td>Логопедический массаж</td>
										<td>500</td>
									</tr>
									<tr>
										<td>Прием врача-психотерапевта</td>
										<td>1000</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="3">
							Клиническая лаборатория
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="3">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Общий анализ крови (ОАК)</td>
										<td>250</td>
									</tr>
									<tr>
										<td>Общий анализ мочи (ОАМ)</td>
										<td>250</td>
									</tr>
									<tr>
										<td>Анализ суточной протеинурии</td>
										<td>150</td>
									</tr>
									<tr>
										<td>Внутримышечное введение лекарственных препаратов</td>
										<td>100</td>
									</tr>
									<tr>
										<td>Биохимический анализ крови</td>
										<td>500</td>
									</tr>
									<tr>
										<td>Определение удельного веса мочи</td>
										<td>200</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="4">
							Кабинет войта-терапии
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="4">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Общий массаж и гимнастика</td>
										<td>1000</td>
									</tr>
									<tr>
										<td>Общий массаж медицинский</td>
										<td>750</td>
									</tr>
									<tr>
										<td>Массаж шеи медицинский</td>
										<td>250</td>
									</tr>
									<tr>
										<td>Массаж спины медицинский</td>
										<td>450</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="5">
							Кабинет физиотерапии
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="5">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Воздействие токами ультравысокой частоты</td>
										<td>300</td>
									</tr>
									<tr>
										<td>Воздействие магнитными полями</td>
										<td>250</td>
									</tr>
									<tr>
										<td>Электростимуляция</td>
										<td>400</td>
									</tr>
									<tr>
										<td>Ультрафонофорез медицинский</td>
										<td>400</td>
									</tr>
									<tr>
										<td>Парафинотерапия</td>
										<td>500</td>
									</tr>
									<tr>
										<td>Рефлексотерпия</td>
										<td>600</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="6">
							Кабинет видеомониторинга
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="6">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Электроэнцефалография с видеомониторингом</td>
										<td>2700</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className={classes.cardHeader}>
						<Accordion.Toggle as={Button} variant="link" eventKey="7">
							Стационарное лечение
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="7">
						<Card.Body className={classes.toggle}>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Наименование услуги</th>
										<th>Цена, руб</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>В круглосуточном стационаре</td>
										<td>3200</td>
									</tr>
									<tr>
										<td>В дневном стационаре</td>
										<td>1200</td>
									</tr>
									<tr>
										<td>Сервисные услуи повышенной комфортности</td>
										<td>1000</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};
