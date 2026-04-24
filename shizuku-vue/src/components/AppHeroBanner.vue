<template>
  <div class="max-w-7xl mx-auto px-4 md:px-12 py-8">
    <section class="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
        class="w-full h-full object-cover"
        alt="Hero"
      />
      <div
        class="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white"
      >
        <h1 class="text-6xl font-black mb-4 tracking-widest">SUMMER SALE</h1>
        <p class="text-xl mb-8">2026 春夏系列全新上市，全館五折起</p>
        <Button label="立即選購" severity="contrast" size="large" rounded />
      </div>
    </section>
  </div>
</template>
