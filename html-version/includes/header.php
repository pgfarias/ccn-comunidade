<?php
require_once __DIR__ . '/config.php';
$pageTitle = $pageTitle ?? $SITE['name'];
$pageDescription = $pageDescription ?? $SITE['description'];
$current = current_page();
?><!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title><?= e($pageTitle) ?></title>
<meta name="description" content="<?= e($pageDescription) ?>">
<meta property="og:title" content="<?= e($pageTitle) ?>">
<meta property="og:description" content="<?= e($pageDescription) ?>">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
</head>
<body>
<header class="site-header">
  <div class="container-app inner">
    <a href="index.php" class="brand">
      <span class="brand-badge">
        <?php include __DIR__ . '/fish-svg.php'; ?>
      </span>
      <span class="brand-text">
        <span class="n1">CCN</span>
        <span class="n2">Cristo p/ as Nações</span>
      </span>
    </a>
    <nav class="nav-desktop" aria-label="Principal">
      <?php foreach ($NAV as $n): ?>
        <a href="<?= e($n['href']) ?>" class="<?= $current === $n['href'] ? 'active' : '' ?>"><?= e($n['label']) ?></a>
      <?php endforeach; ?>
    </nav>
    <div class="header-cta">
      <a href="cultos.php" class="btn-primary" style="padding:.5rem 1rem;font-size:.875rem">Assista ao vivo</a>
    </div>
    <button type="button" class="menu-btn" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu">
      <svg data-icon-open xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
      <svg data-icon-close style="display:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <div class="nav-mobile" id="mobile-menu" data-menu>
    <nav class="container-app">
      <?php foreach ($NAV as $n): ?>
        <a href="<?= e($n['href']) ?>" class="<?= $current === $n['href'] ? 'active' : '' ?>"><?= e($n['label']) ?></a>
      <?php endforeach; ?>
      <a href="cultos.php" class="btn-primary">Assista ao vivo</a>
    </nav>
  </div>
</header>
<main>
