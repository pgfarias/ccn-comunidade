</main>
<footer class="site-footer">
  <div class="container-app footer-grid">
    <div>
      <div class="brand">
        <span class="brand-badge" style="width:2.5rem;height:2.5rem"><?php include __DIR__ . '/fish-svg.php'; ?></span>
        <span class="brand-text">
          <span class="n1">CCN</span>
          <span class="n2">Cristo p/ as Nações</span>
        </span>
      </div>
      <p class="mt-4" style="max-width:20rem;font-size:.875rem;color:var(--muted-foreground)">
        Uma família de fé no Jardim Umarizal, propagando as boas novas de Cristo Jesus a toda criatura.
      </p>
    </div>
    <div>
      <h3>Navegue</h3>
      <ul>
        <?php foreach ($NAV as $n): if ($n['href']==='index.php') continue; ?>
          <li><a href="<?= e($n['href']) ?>"><?= e($n['label']) ?></a></li>
        <?php endforeach; ?>
      </ul>
    </div>
    <div>
      <h3>Horários</h3>
      <ul>
        <li><strong>Sexta:</strong> 20h — Culto de Ensino (presencial e online)</li>
        <li><strong>Domingo:</strong> 9h30 — Escola Bíblica (presencial e online)</li>
        <li><strong>Domingo:</strong> 18h30 — Culto da Família (online)</li>
      </ul>
    </div>
    <div>
      <h3>Contato</h3>
      <ul class="footer-contact">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span><?= e($SITE['address']) ?></span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:<?= e($SITE['phone_raw']) ?>"><?= e($SITE['phone']) ?></a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg><a href="https://wa.me/<?= e($SITE['whatsapp']) ?>" target="_blank" rel="noreferrer">WhatsApp: <?= e($SITE['whatsapp_display']) ?></a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:<?= e($SITE['email']) ?>" style="word-break:break-all"><?= e($SITE['email']) ?></a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg><a href="https://instagram.com/<?= e($SITE['instagram']) ?>" target="_blank" rel="noreferrer">@<?= e($SITE['instagram']) ?></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container-app row">
      <p>© <span data-year>2026</span> Comunidade Cristo para as Nações. Todos os direitos reservados.</p>
      <p class="quote">"Ide por todo o mundo e pregai o evangelho." — Mc 16:15</p>
    </div>
  </div>
</footer>

<a class="wa-fab" href="https://wa.me/<?= e($SITE['whatsapp']) ?>?text=Ol%C3%A1%2C%20cheguei%20pelo%20site%20da%20CCN%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer" aria-label="Fale conosco no WhatsApp">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
</a>

<script src="assets/script.js"></script>
</body>
</html>
