export default function Home() {
  return (
    <div>
      <div className="content">
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.6.8/build/spline-viewer.js"></script>
        <spline-viewer url="https://prod.spline.design/0zlR6fS2sIw8qW3w/scene.splinecode"></spline-viewer>
      </div>
      <form className="box" action="logim.htm" method="POST">
        <h1>log in</h1>
        <input type="text" name="" placeholder="username" />
        <input type="password" name="" placeholder="password" />
        <input type="submit" name="" value="login" />
      </form>
    </div>
  );
}
