/// <reference path="../../main.d.ts" />

declare module "node-sass-middleware" {

    import * as sass from "node-sass";
    import * as express from "express";

    interface Options extends sass.Options {
        /**
         * 
         */
        src: string;
        /**
         * 
         */
        dest?: string;
        /**
         * 
         */
        root?: string;
        /**
         * 
         */
        prefix?: string;
        /**
         * 
         */
        force?: boolean;
        /**
         * 
         */
        debug?: boolean;
        /**
         * 
         */
        indentedSyntax?: boolean;
        /**
         * 
         */
        response?: boolean;
        /**
         * 
         */
        error?: () => void;
    }

    /**
     * 
     *
     */

    function nodeSassMiddleware(options: Options): express.RequestHandler;
    /**
     * 
     */
    export = nodeSassMiddleware;
}