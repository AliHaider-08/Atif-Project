// Middleware.js
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("🚀 Action Dispatched:", action);
  const result = next(action);
  console.log("📊 New State:", store.getState());
  return result;
};

const blockNegativeMiddleware = (store) => (next) => (action) => {
  if (action.type === "counter/decrement" && store.getState().counter.value <= 0) {
    console.warn("❌ Counter cannot go below 0");
    return; // Block the action
  }
  return next(action);
};

// 👉 Named exports
export { loggerMiddleware, blockNegativeMiddleware };
