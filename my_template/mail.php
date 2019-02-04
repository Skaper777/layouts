<?


// --------------------------- конфигурирование -------------------------- //

$adminemail="Olegkan2015@yandex.ru";  // емайл админа - кому отсылать
$date=date("d.m.Y"); // число.месяц.год
$time=date("H:i:s"); // часы:минуты:секунды
// ---------------------------------------------------------------------- //



if (isset($_POST['name'])) {

// считываем данные формы:

// Имя контактного лица 
$name=$_POST['name'];

// Почта
$mail=$_POST['mail'];

// Текст сообщения
$text=$_POST['text'];

// Тип сообщения
$tip=$_POST['tip'];

// отправка админу сообщения
$headers=null; // Настройки для отправки писем
$headers.="Content-Type: text/html; charset=utf-8\r\n";
$headers.="From: Administrator <".$adminemail.">\r\n";
$headers.="X-Mailer: PHP/".phpversion()."\r\n";

// Собираем всю информацию в теле письма
$allmsg="<html><head><meta http-equiv='Content-Type' content='text/html; charset='></head>
<body><BR><BR><center>
<table width=500><tr><td height='25' bgcolor='#267f8d' align=center>
<font color=white>Клиент ожидает вашего ответа!</font></td></tr></table><br>

<table border=0 cellpadding=0 cellspacing=0 width=500 bgcolor=navy><tr><td width=964>
<table border=0 cellpadding=3 cellspacing=1 width='100%'>

<tr><td width=114 bgcolor='#fff' height=24><font size=2>Тип сообщения</font></td>
<td width=483 bgcolor='#fff'><font size=2>$tip</font></td></tr>

<tr><td width=114 bgcolor='#fff' height=24><font size=2>Имя контактного лица</font></td>
<td width=483 bgcolor='#fff'><font size=2>$name</font></td></tr>

<tr><td bgcolor=#fff><font size='-1'>E-mail или телефон</font></td>
<td width=483 bgcolor='#fff'><font size=2>$mail</font></td></tr>

<tr><td bgcolor=#fff><font size='-1'>Сообщение</font></td>
<td width=483 bgcolor='#fff'><font size=2>$text</font></td></tr>

<tr><td bgcolor='#fff' height=24><font size=2>Дата подачи заявки:</font></td>
<td bgcolor='#fff'><font size=2>$time - $date</font></td></tr>


</table></td></tr></table><br>

<table width=500><tr><td height=25 bgcolor='#267f8d' align='center'>
<font size='-1' color='white'>Отправлено со страницы autosmotr.ru</font></td></tr></table>
</body></html>";

// Отправляем письмо майлеру на съедение если разрешена отправка ;-)
mail("$adminemail", "Вопрос с сайта от \"$name\"", $allmsg, $headers);
mail("Lozovatskiydenis@yandex.ru", "Вопрос с сайта от \"$name\"", $allmsg, $headers); exit;

}
else {exit;}

?>