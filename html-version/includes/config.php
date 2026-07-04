<?php
// Configurações globais do site CCN (versão HTML/PHP)

$SITE = [
  'name'        => 'CCN — Comunidade Cristo para as Nações',
  'short'       => 'CCN',
  'tagline'     => 'Cristo para as Nações',
  'description' => 'Uma família de fé no Jardim Umarizal, São Paulo. Cultos sexta 20h (presencial e online), domingo 9h30 (presencial e online) e 18h30 (online).',
  'address'     => 'R. Itamanduaba, 36 — Jd. Umarizal, São Paulo — SP, 05755-140',
  'phone'       => '(11) 2533-7770',
  'phone_raw'   => '+551125337770',
  'whatsapp'    => '5511990212279',
  'whatsapp_display' => '(11) 99021-2279',
  'email'       => 'comcristoparaasnacoes@gmail.com',
  'instagram'   => 'comunidadeccn',
  'instagram_widget' => 'https://lightwidget.com/widgets/3c396f52799a5720b8c10accc760f320.html',
];

$NAV = [
  ['href' => 'index.php',       'label' => 'Início'],
  ['href' => 'sobre.php',       'label' => 'Quem Somos'],
  ['href' => 'ministerios.php', 'label' => 'Ministérios'],
  ['href' => 'cultos.php',      'label' => 'Cultos & Ao Vivo'],
  ['href' => 'agenda.php',      'label' => 'Agenda'],
  ['href' => 'conteudo.php',    'label' => 'Conteúdo'],
  ['href' => 'biblia.php',      'label' => 'Bíblia'],
  ['href' => 'contato.php',     'label' => 'Contato'],
];

function current_page(): string {
  return basename($_SERVER['PHP_SELF'] ?? 'index.php');
}

function e($s): string {
  return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
