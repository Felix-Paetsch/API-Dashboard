
import redirect_page_not_found from "./utils/redirect_page_not_found.js";
import hot_reload_route from "./utils/hot_reload.js";

export default function register_routes(app){
    app.get("/", (req, res) => {
        app.event_manager.emit("jdb_read_global", (data) => {
            return res.render("index", {
                jbd: data
            });
        });
    });

    hot_reload_route(app);
    app.use((req, res) => redirect_page_not_found(req, res));
}