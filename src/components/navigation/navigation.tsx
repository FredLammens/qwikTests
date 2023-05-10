import { component$} from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="sticky top-0 z-10 bg-white  backdrop-filter backdrop-blur-lg bg-opacity-30  border-b border-gray-200">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex items-center justify-between p-4">
        <span class="text-2xl text-gray-900 font-semibold">Logo</span>
        <div class="flex space-x-4 text-gray-900">
          <a href="/">Dashboard</a>
          <a href="/page1">Page1</a>
        </div>
      </div>
    </div>
  </nav>
  );
});
