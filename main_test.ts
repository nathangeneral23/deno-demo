import { add } from "./main.ts";
import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";

Deno.test(function addTest() {
    assertEquals(add(2, 3), 5);
});
