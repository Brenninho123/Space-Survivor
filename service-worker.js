self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("space-survivor").then(cache =>
      cache.addAll(["./", "./index.html"])
    )
  );
});